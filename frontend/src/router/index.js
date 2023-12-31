import { createRouter, createWebHistory } from "vue-router";

// import components
import MyContent from "@/components/content/MyContent.vue";

// import store
import { useGlobalStore } from "@/stores/global";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: MyContent,
		},
		{
			path: "/search/:cityIndex/:mode/:house_type/:new_",
			name: "search",
			component: () => import("@/other pages/search page/SearchPage.vue"),
		},
		{
			path: "/query/:mode",
			name: "query",
			component: () => import("@/other pages/query page/QueryPage.vue"),
		},
		{
			path: "/policy/:policytype",
			name: "policy",
			component: () => import("@/other pages/policy page/PolicyPage.vue"),
		},
		{
			path: "/company",
			name: "company",
			component: () => import("@/other pages/company page/CompanyPage.vue"),
		},
		{
			path: "/upload",
			name: "upload",
			component: () => import("@/other pages/upload page/UploadPage.vue"),
			children: [
				{
					path: "upload",
					component: () => import("@/other pages/upload page/UploadHouse.vue"),
				},
				{
					path: "modify",
					component: () => import("@/other pages/upload page/ModifyHomePage.vue"),
				},
			],
			beforeEnter: () => {
				const globalStore = useGlobalStore()
				globalStore.isNavFooter = false
			},
		},
		{
			path: "/detailpage/:houseID",
			name: "detailpage",
			component: () => import("@/other pages/detail page/DetailPage.vue"),
			meta: {
				keepAlive: true
			}
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
		  // 如果有保存的位置信息，则滚动到保存的位置
		  return savedPosition;
		} else {
		  // 否则滚动到顶部
		  return { x: 0, y: 0 };
		}
	},
});

router.beforeEach((to, from, next) => {
	document.body.scrollTo(0, 0);
	next();
});

router.beforeResolve((to, from, next) => {
    if (from.path.startsWith('#/upload')) {
		const globalStore = useGlobalStore()
		globalStore.isNavFooter = true
    } else {
        
    }
    next()
})

export default router;
