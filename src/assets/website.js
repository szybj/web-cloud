export default {
  title: "真橙金服",
  logo: "O",
  author: "orange-king",
  lockPage: "/lock",
  info: {
    title: "真橙金服 后台系统"
  },
  wel: {
    title: "真橙金服 后台系统"
  },
  //http的status默认放行不用统一处理的,
  statusWhiteList: [400],
  //配置首页不可关闭
  isFirstPage: false,
  // 是否使用mock模拟数据
  mockData: false,
  fistPage: {
    label: "首页",
    value: "/work/home",
    params: {},
    query: {},
    group: [],
    close: false
  },
  //配置菜单的属性
  menu: {
    props: {
      label: "text",
      path: "path",
      icon: "icon",
      children: "sub"
    }
  }
}
