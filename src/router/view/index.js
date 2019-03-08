import Layout from "page/web/"

export default [
  {
    path: "/work",
    component: Layout,
    redirect: "/work/home",
    children: [
      {
        path: "home",
        name: "首页",
        component: () => import(/* webpackChunkName: "view" */ "page")
      },
      {
        path: "sales/management",
        name: "销售管理",
        component: () => import(/* webpackChunkName: "view" */ "view/sales/management")
      },
      {
        path: "sales/salesConfig",
        name: "销售配置",
        component: () => import(/* webpackChunkName: "view" */ "view/sales/salesConfig")
      },
      {
        path: "view/report/:viewId",
        name: "配置测试",
        component: () => import(/* webpackChunkName: "view" */ "view/sales/reportForm")
      }
    ]
  }
];
