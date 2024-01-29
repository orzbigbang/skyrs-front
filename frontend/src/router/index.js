import { createRouter, createWebHashHistory } from "vue-router";

// import components
import MyContent from "@/components/content/MyContent.vue";

// import store
import { useGlobalStore } from "@/stores/global";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
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
			path: "/detailpage/:houseID",
			name: "detailpage",
			component: () => import("@/other pages/detail page/DetailPage.vue"),
			meta: {
				keepAlive: true
			}
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
			path: "/manage",
			name: "manage",
			component: () => import("@/other pages/manage page/ManagePage.vue"),
			children: [
				{
					path: "houselist",
					component: () => import("@/other pages/manage page/HouseList.vue"),
				},
				{
					path: "userlist",
					component: () => import("@/other pages/manage page/UserList.vue"),
				},
				{
					path: "upload",
					component: () => import("@/other pages/manage page/UploadHouse.vue"),
				},
				{
					path: "modify",
					component: () => import("@/other pages/manage page/ModifyHomePage.vue"),
				},
			],
		},
		{
			path: "/housemanage/:houseID",
			name: "housemanage",
			component: () => import("@/other pages/manage page/HouseEdit.vue"),
		},
		{
			path: "/usermanage/:userID",
			name: "usermanage",
			component: () => import("@/other pages/manage page/UserEdit.vue"),
		},
		{
			path: "/housecreate",
			name: "housecreate",
			component: () => import("@/other pages/manage page/HouseCreate.vue"),
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

// 进入页面画面挪到最上方
router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});


// 进入管理页面的时候隐藏头部和底部
// 进入管理页面需要密码
let passOK = false
router.beforeResolve((to, from, next) => {
	const globalStore = useGlobalStore()
	if (to.path === "/" || to.path.startsWith('/search') || to.path.startsWith('/detailpage') || to.path.startsWith('/company') || to.path.startsWith('/query')  || to.path.startsWith('/policy')) {
		globalStore.isNavFooter = true
    } else {
		if (!passOK) {
			const userInput = prompt("パスワードを入力してください")
			if (userInput !== "") {
				alert("パスワードが正しくありません！")
				router.back()
			} else {
				passOK = true
			}
		}
		globalStore.isNavFooter = false
    }
	next()
})

export default router;
