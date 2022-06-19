import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Home from '@/views/Home.vue'
import Haha from '@/views/test/Haha.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
	},
	{
		path: '/bootstrap',
		name: 'Bootstrap',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/bootstrap/Bootstrap.vue')
	},
	{
		path: '/javascript',
		name: 'Javascript',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/javascript/Javascript.vue')
	},
	{
		path: '/vue',
		name: 'Vue',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/vue/Vue.vue')
	},
	{
		path: '/java',
		name: 'Java',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/java/Java.vue')
	},
	{
		path: '/details',
		name: 'Details',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/details/Details.vue')
	},
	{
		path: '/search',
		name: 'Search',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/search/Search.vue')
	},
	{
		path: '/login',
		name: 'Login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/login/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/register/Register.vue')
	},
	{
		path: '/admin',
		name: 'Admin',
		component: () => import( /* webpackChunkName: "about" */ '@/views/admin/Admin.vue'),
		children: [{
				// 当 /user/:id/profile 匹配成功，
				// UserProfile 会被渲染在 User 的 <router-view> 中
				path: 'test',
				component: Haha
			},
			{
				path: 'personinfo',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Person.vue')
			},
			{
				path: 'collect',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Collect.vue')
			},
			{
				path: 'buycar',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Buycar.vue')
			},
			{
				path: 'orders',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Orders.vue')
			},
			{
				path: 'users',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Users.vue')
			},
			{
				path: 'goods',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Goods.vue')
			},
			{
				path: 'addGoods',
				component: () => import( /* webpackChunkName: "about" */ '@/views/admin/subviews/Addgoods.vue')
			}
		]
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
