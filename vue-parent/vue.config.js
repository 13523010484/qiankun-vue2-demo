module.exports = {
  css: {
    sourceMap: true,
  },
  transpileDependencies: ["dom7", "swiper", "xlsx-populate", "crypto-js"],
  assetsDir: "assets",
  devServer: {
    port: 8080, // 启动项目时的端口号
    disableHostCheck: true, // 关闭主机检查，保证子应用可以被主应用fetch到
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    before: require("./src/mock/index.js"),
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        pathRewrite: {
          "/api": "/api",
        },
      },
      "/setup": {
        target: "http://localhost:8081/",
        changeOrigin: true,
        pathRewrite: {
          "/setup": "/setup",
        },
      },
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
};
