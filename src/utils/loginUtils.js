export const getInvestorList = function () {
  return window.sessionStorage.getItem('investorList')
}
export const investorList = (investorData) => {
  window.sessionStorage.setItem('investorList', investorData)
}
export const getArea = function () {
  return window.sessionStorage.getItem('area')
}
export const area = function (areaData) {
  window.sessionStorage.setItem('area', areaData)
}
