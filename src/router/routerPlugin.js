let RouterPlugin = function() {
  this.$router = null
  this.$store = null
}
RouterPlugin.install = function(router, store) {
  this.$router = router
  this.$store = store

  function objToform(obj) {
    let result = []
    Object.keys(obj).forEach(ele => {
      result.push(`${ele}=${obj[ele]}`)
    })
    return result.join("&")
  }
  this.$router.$orangeRouter = {
    //全局配置
    $website: this.$store.getters.website,
    routerList: [],
    group: "",
    safe: this,
    // 设置标题
    setTitle: function(title) {
      title = title
        ? `${title}——真橙金服 管理系统`
        : "真橙金服 管理系统"
      document.title = title
    },
    closeTag: value => {
      const tag = value || this.$store.getters.tag
      this.$store.commit("DEL_TAG", tag)
    },
    //处理路由
    getPath: function(params) {
      let { src } = params
      let result = src || "/"
      if (src.includes("http") || src.includes("https")) {
        result = `/myiframe/urlPath?${objToform(params)}`
      }
      return result
    },
    //正则处理路由
    vaildPath: function(list, path) {
      let result = false
      list.forEach(ele => {
        if (new RegExp("^" + ele + ".*", "g").test(path)) {
          result = true
        }
      })
      return result
    },
    //设置路由值
    getValue: function(route) {
      let value = ""
      if (route.query.src) {
        value = route.query.src
      } else {
        value = route.path
      }
      return value
    },
    //动态路由
    formatRoutes: function(aMenu = [], first) {
      const aRouter = []
      const propsConfig = this.$website.menu.props
      const propsDefault = {
        label: propsConfig.label || "text",
        path: propsConfig.path || "path",
        icon: propsConfig.icon || "icon",
        children: propsConfig.children || "sub",
        meta: propsConfig.meta || "meta"
      }
      if (aMenu.length === 0) return
      for (let i = 0; i < aMenu.length; i++) {
        const oMenu = aMenu[i]
        if (this.routerList.includes(oMenu[propsDefault.path])) return
        const path = (() => {
            if (first) {
              return oMenu[propsDefault.path].replace("/index", "")
            } else {
              return oMenu[propsDefault.path]
            }
          })(),
          component = oMenu.component,
          name = oMenu[propsDefault.text],
          icon = oMenu[propsDefault.icon],
          children = oMenu[propsDefault.sub],
          meta = oMenu[propsDefault.meta]

        const isChild = children.length !== 0
        const oRouter = {
          path: path,
          component(resolve) {
            // 判断是否为首路由
            if (first) {
              require(["../page/web"], resolve)
              return
              // 判断是否为多层路由
            } else if (isChild && !first) {
              require(["../page/web/layout"], resolve)
              return
              // 判断是否为最终的页面视图
            } else {
              require([`../${component}.vue`], resolve)
            }
          },
          name: name,
          icon: icon,
          meta: meta,
          redirect: (() => {
            if (!isChild && first) return `${path}/index`
            else return ""
          })(),
          // 处理是否为一级路由
          children: !isChild
            ? (() => {
                if (first) {
                  oMenu[propsDefault.path] = `${path}/index`
                  return [
                    {
                      component(resolve) {
                        require([`../${component}.vue`], resolve)
                      },
                      icon: icon,
                      name: name,
                      meta: meta,
                      path: "index"
                    }
                  ]
                }
                return []
              })()
            : (() => {
                return this.formatRoutes(children, false)
              })()
        }
        aRouter.push(oRouter)
      }
      if (first) {
        if (!this.routerList.includes(aRouter[0][propsDefault.path])) {
          this.safe.$router.addRoutes(aRouter)
          this.routerList.push(aRouter[0][propsDefault.path])
        }
      } else {
        return aRouter
      }
    }
  }
}
export default RouterPlugin
