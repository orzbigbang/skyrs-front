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
			path: "/search/:city/:mode/:house_type/:new_",
			name: "search",
			component: () => import("@/other pages/search page/SearchPage.vue"),
		},
		{
			path: "/query/:mode",
			name: "query",
			component: () => import("@/other pages/query page/QueryPage.vue"),
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
		},
	],
});

router.beforeEach((to, from, next) => {
	window.scroll(0, 0);
	next();
});

router.beforeResolve((to, from, next) => {
    if (from.path === '/upload') {
		const globalStore = useGlobalStore()
		globalStore.isNavFooter = true
    } else {
        
    }
    next()
})

export default router;
