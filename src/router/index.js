import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home')
  },
  {
    // 购物车页
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import(/* webpackChunkName: "ShopCart" */ '../views/ShopCart/ShopCart')
  },
  {
    //附近店铺页
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop/Shop')
  },
  {
    // 确认订单页
    path: '/orderconfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "OrderConfirmation" */ '../views/OrderConfirmation/OrderConfirmation')
  },
  {
    // 订单页
    path: '/orderlist',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList" */ '../views/OrderList/OrderList')
  },
  {
    // 个人中心页
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ '../views/Mine/Mine')
  },
  {
    // 我的地址
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "Address" */ '../views/Address/Address')
  },
  {
    // 新建地址
    path: '/newaddress',
    name: 'newAddress',
    component: () => import(/* webpackChunkName: "newAddress" */ '../views/newAddress/newAddress')
  },
  {
    // 编辑地址
    path: '/address/:id',
    name: 'upAddress',
    component: () => import(/* webpackChunkName: "upAddress" */ '../views/upAddress/upAddress')
  },
  {
    //注册页
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '..//views/Register/Register'),
    beforeEnter(to, from, next){
      const { isLogin } = localStorage;
      isLogin ? next({ name : 'Home'}): next();
    }
  },
  {
    //登陆页
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login/Login'),
    beforeEnter(to, from, next){
      const { isLogin } = localStorage;
      isLogin ? next({ name : 'Home'}): next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  if(!isLogin && (to.name !== "Login" && to.name !== "Register"))
  {
    next({ name : 'Login'});
  }else{
    next();
  }
})

export default router
