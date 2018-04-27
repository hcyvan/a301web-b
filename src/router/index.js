import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const productList = r => require.ensure([], () => r(require('@/page/productList')), 'productList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [
		    {
                path: '',
                component: home,
                meta: [],
		    },
            {
                path: '/addShop',
                component: addShop,
                meta: ['添加数据', '添加商铺'],
		    },
            {
                path: '/addGoods',
                component: addGoods,
                meta: ['添加数据', '添加商品'],
		    },
            {
                path: '/productList',
                component: productList,
                meta: ['数据管理', '产品列表'],
		    },
            {
                path: '/orderList',
                component: orderList,
                meta: ['数据管理', '订单列表'],
		    },
            {
                path: '/explain',
                component: explain,
                meta: ['说明', '说明'],
		    }
		]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
