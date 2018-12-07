const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("utils", resolve("src/utils"))
      .set("mixin", resolve("src/mixin"))
      .set("router", resolve("src/router"))
      .set("components", resolve("src/components"));
  },
  devServer: {
    open: true
  },
  productionSourceMap: false
};
