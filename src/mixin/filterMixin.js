export default {
  methods: {
    // 占位
    placeholder(row, column, callValue, index) {
      return callValue || callValue === 0 ? callValue : "----";
    },
    // 货币格式化
    currency(row, column, callValue, index) {
      return callValue ? window.Vue.filter("currency")(callValue, "") : "----";
    },
    filterDateYMD(row, column, callValue, index) {
      return callValue ? window.Vue.filter("date")(callValue, "%F") : "----";
    },
    filterDateYMDHM(row, column, callValue, index) {
      return callValue
        ? window.Vue.filter("date")(callValue, "%F %H:%M")
        : "----";
    },
    filterDateYMDHMS(row, column, callValue, index) {
      return callValue ? window.Vue.filter("date")(callValue, "%F %T") : "----";
    }
  }
};
