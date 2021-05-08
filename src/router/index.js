import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home')
  },
  {
    path: '/cartlist',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "CartList" */ '../views/CartList/CartList')
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import(/* webpackChunkName: "ShopCart" */ '../views/ShopCart/ShopCart')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop/Shop')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '..//views/Register/Register'),
    beforeEnter(to, from, next){
      const { isLogin } = localStorage;
      isLogin ? next({ name : 'Home'}): next();
    }
  },
  {
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
