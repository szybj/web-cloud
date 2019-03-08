import { setStore, getStore } from 'utils/store'

/**
 * select数据格式转换
 */
export const getSelectData = (sourceDate, option) => {
  return new Promise((resolve) => {
    const arr = []
    if (option && option.isAll === true) {
      arr.push({
        value: '',
        label: '全部'
      })
    }
    if (sourceDate.data && Array.isArray(sourceDate.data)) {
      sourceDate.data.forEach(item => {
        if (option && option.filter && option.filter[item[sourceDate.valueKey]]) {
          return
        } else {
          arr.push({
            value: item[sourceDate.valueKey].toString(),
            label: item[sourceDate.labelKey]
          })
        }
      })
    } else {
      for (let item in sourceDate.data) {
        if (option && option.filter && option.filter[item]) {
          continue
        } else {
          arr.push({
            value: item,
            label: sourceDate.data[item]
          })
        }
      }
    }
    resolve(arr)
  })
}
/**
 * 校验登陆状态
 * @returns {boolean}
 */
export const checkLoginState = function () {
  return !!getStore({name: 'userInfo'})
}
/**
 * 订单选项格式化
 * @param orderDic
 * @param isAll
 * @returns {Promise<any>}
 */
export const orderSelectFormat = (sourceDate, option) => {
  return new Promise((resolve, reject) => {
    let arr = []
    let hash = {}
    if (option && option.isAll === true) {
      arr.push({
        value: "",
        label: "全部"
      })
    }
    for (let item in sourceDate.data) {
      for (let key in sourceDate.data[item]) {
        item = key === '-2' ? '1' : item
        arr.push({
          value: item + ':' + key,
          label: sourceDate.data[item][key]
        })
      }
    }
    const result = arr.reduce((item, next) => {
      hash[next.value] ? '' : hash[next.value] = true && item.push(next)
      return item
    }, [])
    resolve(result)
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
/**
 * 判空
 * @param val
 * @returns {boolean}
 */
export function validateNull (val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (
      val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
    ) {
      return true
    }
    return false
  }
  return false
}

/**
 * 初始化数据格式
 * @param type
 * @param multiple
 * @param value
 * @param listType
 * @returns {*}
 */
export const initVal = ({ type, multiple, value, listType }) => {
  if ((['select'].includes(type) && multiple) || ['cascader'].includes(type)) {
    if (!Array.isArray(value)) {
      return (value || [])
    } else {
      return value
    }
  } else {
    return value
  }
}
/**
 * 表单初始化值
 * @param list
 */
export const formInitVal = (list) => {
  let form = {}
  list.forEach(ele => {
    if ( ele.type === 'checkbox' || ele.type === 'cascader' || ele.type === 'dates' || (ele.type === 'upload' && ele.listType !== 'picture-img') || ele.multiple || ele.range || ele.dataType === 'array') {
      if (ele.search) form[ele.prop] = []
    } else if (['number'].includes(ele.type) || ele.dataType === 'number') {
      if (ele.search) {
        form[ele.prop] = 0
      }
    } else {
      form[ele.prop] = ''
    }
    //搜索表单默认值设置
    if (!validateNull(ele.default)) {
      form[ele.prop] = ele.default
    }
  })
  return form
}
/**
 * 搜索框获取动态组件
 */
export const searchType = (type) => {
  if (['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange'].includes(type)) {
    return 'orangeDate'
  } else if (['select'].includes(type)) {
    return 'orangeSelect'
  } else if (['cascader'].includes(type)) {
    return 'orangeCascader'
  }
  return 'orangeInput'
}
/**
 * 获取字典
 * @param dicData
 * @param DIC
 * @returns {*}
 */
export const setDic = (dicData, DIC) => {
  return (typeof (dicData) === 'string') ? DIC : dicData
}
