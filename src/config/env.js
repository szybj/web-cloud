// 配置编译环境和线上环境之间的切换

let baseUrl = ""
let iconfontVersion = ["369176_n1e379ylwz"]
let iconfontUrl = "//at.alicdn.com/t/font_$key.css"
let codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV == "development") {
  baseUrl = "https://jarvis-api.orange-king.com/v1" // 开发环境地址
} else if (env.NODE_ENV == "production") {
  baseUrl = "" //生产环境地址
} else if (env.NODE_ENV == "test") {
  baseUrl = "" //测试环境地址
}
export { baseUrl, iconfontUrl, iconfontVersion, codeUrl, env }
