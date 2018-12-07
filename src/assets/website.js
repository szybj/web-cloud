export default {
  title: "真橙金服",
  logo: "ORANGE-KING",
  author: "orange-ling",
  lockPage: "/lock",
  tokenTime: 6000,
  info: {
    title: "真橙金服 后台系统"
  },
  wel: {
    title: "真橙金服 后台系统"
  },
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [400],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    group: [],
    close: false
  },
  //配置菜单的属性
  menu: {
    props: {
      label: "label",
      path: "href",
      icon: "icon",
      children: "children"
    }
  }
};
