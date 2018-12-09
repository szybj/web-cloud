/**
 * select数据格式转换
 */
export const getSelectData = (option, isAll) => {
  return new Promise((resolve, reject) => {
    let arr = []
    if (isAll === true) {
      arr.push({
        value: "",
        label: "全部"
      })
    }
    if (option.data && Array.isArray(option.data)) {
      option.data.forEach(item => {
        arr.push({
          value: item[option.valueKey].toString(),
          label: item[option.labelKey]
        })
      })
    } else {
      for (let item in option) {
        arr.push({
          value: item,
          label: option[item]
        })
      }
    }
    resolve(arr)
  })
}
/**
 * 节流
 */
export const throttle = (fn, delay) => {
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
/**
 * 动态插入阿里字体样式
 */
export const loadStyle = url => {
  const link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = url
  const head = document.getElementsByTagName("head")[0]
  head.appendChild(link)
}
/**
 * date拆分
 */
export const daterangeSplit = (daterangeSplitDate, location) => {
  let date
  if ( Array.isArray(daterangeSplitDate) && daterangeSplitDate.length === 2 && location ) {
    if (location === "start") {
      date = daterangeSplitDate[0]
    } else if (location === "end") {
      date = daterangeSplitDate[1]
    } else {
      date = ""
    }
  } else {
    date = ""
  }
  return date
}
/**
 * 判断路由是否相等
 */
export const diffRouter = (obj1, obj2) => {
  delete obj1.close
  var o1 = obj1 instanceof Object
  var o2 = obj2 instanceof Object
  if (!o1 || !o2) {
    /*  判断不是对象  */
    return obj1 === obj2
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object
    var t2 = obj2[attr] instanceof Object
    if (t1 && t2) {
      return diffRouter(obj1[attr], obj2[attr])
    } else if (obj1[attr] !== obj2[attr]) {
      return false
    }
  }
  return true
}
/***
 * 加密
 * @param params
 * @returns {any}
 */
export const encryption = (params) => {
    let {
        data,
        type,
        param,
        key
    } = params
    let result = JSON.parse(JSON.stringify(data))
    if (type == 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele])
        })
    } else if (type == 'Aes') {
        param.forEach(ele => {
            result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString()
        })
    }
    return result
}
/**
 * 表单序列化
 * @param data
 * @returns {string}
 */
export const serialize = data => {
  let list = [];
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}
