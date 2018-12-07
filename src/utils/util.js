/**
 * select数据格式转换
 */
export const getSelectData = (option, isAll) => {
  return new Promise((resolve, reject) => {
    let arr = [];
    if (isAll === true) {
      arr.push({
        value: "",
        label: "全部"
      });
    }
    if (option.data && Array.isArray(option.data)) {
      option.data.forEach(item => {
        arr.push({
          value: item[option.valueKey].toString(),
          label: item[option.labelKey]
        });
      })
    } else {
      for (let item in option) {
        arr.push({
          value: item,
          label: option[item]
        });
      }
    }
    resolve(arr);
  })
}
/**
 * 节流
 */
export const throttle = (fn, delay) => {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
};
/**
 * 动态插入阿里字体样式
 */
export const loadStyle = url => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
}
/**
 * date拆分
 */
export const daterangeSplit = (daterangeSplitDate, location) => {
  let date;
  if (
    Array.isArray(daterangeSplitDate) &&
    daterangeSplitDate.length === 2 &&
    location
  ) {
    if (location === "start") {
      date = daterangeSplitDate[0];
    } else if (location === "end") {
      date = daterangeSplitDate[1];
    } else {
      date = "";
    }
  } else {
    date = "";
  }
  return date;
}
/**
 * 判断路由是否相等
 */
export const diffRouter = (obj1, obj2) => {
  delete obj1.close;
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {
    /*  判断不是对象  */
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
    //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
  }
  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object;
    var t2 = obj2[attr] instanceof Object;
    if (t1 && t2) {
      return diffRouter(obj1[attr], obj2[attr]);
    } else if (obj1[attr] !== obj2[attr]) {
      return false;
    }
  }
  return true;
}
