import Vue from 'vue'
import VueRouter from 'vue-router'

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
          import(/* webpackChunkName: "Product-list" */ "@/components/Home/photoDetail.vue"),
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
