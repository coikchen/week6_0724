import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('../views/Home.vue'),
    // component: Home
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      { // 動態路由
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: '/checkoutdone',
        name: 'Checkoutdone',
        component: () => import('../views/Checkoutdone.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    // name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    //  path 的 /不用添加
    children: [{
      path: 'products',
      component: () => import('../views/dashboard/Products.vue')
    },
    {
      path: 'coupons',
      component: () => import('../views/dashboard/Coupons.vue')
    },
    {
      path: 'orders',
      component: () => import('../views/dashboard/Orders.vue')
    },
    {
      path: 'imgs',
      component: () => import('../views/dashboard/Imgs.vue')
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
