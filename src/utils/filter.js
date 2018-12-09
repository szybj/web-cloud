// 占位
export const customPlaceholder = (value, symbol = "----") => value || symbol

// 时间格式转换 基于vue-filter https://github.com/wy-ei/vue-filter#date
export const customDate = (value, format = "%F", placeholder = "----") =>
  Number(value)
    ? window.Vue.filter("date")(Number(value), format)
    : placeholder

// 货币
export const customCurrency = (value, digit = 2, placeholder = "----") =>
  value ? window.Vue.filter("currency")(value, "", digit) : placeholder
