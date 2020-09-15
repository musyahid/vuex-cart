import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from "../views/Product.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () =>
      import(/* webpackChunkName: "Home" */ "@/components/Home/photosList.vue"),
    },
    children: [
      {
        path: "detail/:id",
        props: true,
        name: "photoDetail",
        component: () =>
          import(/* webpackChunkName: "Product-detail" */ "@/components/Home/photoDetail.vue"),
      },
    ],
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
