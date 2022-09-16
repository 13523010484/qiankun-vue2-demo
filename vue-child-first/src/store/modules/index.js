const files = require.context(".", true, /\.module.js$/);
const modules = {};

files.keys().forEach((key) => {
  let temp = modules[key.replace(/(\.\/|\.module.js)/g, "")];
  if (!temp) {
    temp = {};
  }
  modules[key.replace(/(\.\/|\.module.js)/g, "")] = Object.assign(
    temp,
    files(key).default
  );
});

export default modules;
