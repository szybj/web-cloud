import Layout from 'page/web/'
const a = {
  5: '销售管理'
}
export default [
  {
    path: '/work',
    component: Layout,
    redirect: '/work/home',
    children: [
      {
        path: 'home',
        name: '首页',
        component: () => import(/* webpackChunkName: "view" */ 'page')
      },
      {
        path: 'sales/management',
        name: '销售管理',
        component: () => import(/* webpackChunkName: "view" */ 'view/sales/management')
      },
      {
        path: 'sales/salesConfig',
        name: '销售配置',
        component: () => import(/* webpackChunkName: "view" */ 'view/sales/salesConfig')
      },
      {
        path: 'view/test/:viewId',
        name: '配置测试',
        component: () => import(/* webpackChunkName: "view" */ 'view/sales/management')
      },
      {
        path: 'view/order/:viewId',
        name: '订单列表',
        component: () => import(/* webpackChunkName: "view" */ 'view/sales/reportForm')
      },
      {
        path: 'view/details',
        component: () => import(/* webpackChunkName: "view" */ 'view/sales/orderDetailsPage')
      },
      {
        path: 'sales/details',
        component: () => import(/* webpackChunkName: "view" */ 'view/sales/detailsPage')
      }
    ]
  }
]
