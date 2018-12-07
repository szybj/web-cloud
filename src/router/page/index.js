export default [
  {
    path: "/login",
    name: "登录页",
    component: () =>
      import(/* webpackChunkName: "page" */ "@/page/login/userlogin"),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: "/",
    name: "主页",
    redirect: "/wel"
  }
];
