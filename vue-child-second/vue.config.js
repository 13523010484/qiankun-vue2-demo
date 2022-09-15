const { name } = require("./package");
module.exports = {
  devServer: {
    port: 8082, // 启动项目时的端口号
    disableHostCheck: true, // 关闭主机检查，保证子应用可以被主应用fetch到
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
