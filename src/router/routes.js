
const routes = [
	{
	  path: '/',
	  name: 'home',
	  component: () => import ( '../views/HomeView.vue')
	},
	{
	  path: '/about',
	  name: 'about',
	  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
	  path: '/esg',
	  name: 'esg',
	  component: () => import(/* webpackChunkName: "about" */ '../views/ESGView.vue')
	},
	{
	  path: '/map',
	  name: 'map',
	  component: () => import(/* webpackChunkName: "about" */ '../views/MapView.vue')
	},
	{
	  path: '/senkon',
	  name: 'senkon',
	  component: () => import(/* webpackChunkName: "about" */ '../views/SenkonView.vue')
	},
	{
	  path: '/park',
	  name: 'park',
	  component: () => import(/* webpackChunkName: "about" */ '../views/ParkView.vue')
	},
	{
	  path: '/techmap',
	  name: 'techmap',
	  component: () => import(/* webpackChunkName: "about" */ '../views/TechMap.vue')
	},
	{
	  path: '/cartoonmap',
	  name: 'cartoonmap',
	  component: () => import(/* webpackChunkName: "about" */ '../views/CartoonMap.vue')
	},
	{
	  path: '/createnew',
	  name: 'createnew',
	  component: () => import(/* webpackChunkName: "about" */ '../views/CreateNew.vue')
	},
	{
	  path: '/keyboard',
	  name: 'keyboard',
	  component: () => import(/* webpackChunkName: "about" */ '../views/Keyboard.vue')
	},
	{
	  path: '/createnewb',
	  name: 'createnewb',
	  component: () => import(/* webpackChunkName: "about" */ '../views/CreateNewb.vue')
	},
	{
	  path: '/createneJY',
	  name: 'createneJY',
	  component: () => import(/* webpackChunkName: "about" */ '../views/CreateNewJY.vue')
	},
  ]

  export default routes