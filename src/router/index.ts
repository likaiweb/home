import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes:Array<RouteRecordRaw>=[{
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/home/index.vue"),
},{
    path: "/list",
    name: "list",
    meta: {
      title: "列表",
      keepAlive: true
    },
    component: () => import("../views/list/index.vue"),
  },]

  const router=createRouter({
      history:createWebHashHistory(),
      routes
  })

  export default router