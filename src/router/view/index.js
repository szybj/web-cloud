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
      }
    ]
  }
];
