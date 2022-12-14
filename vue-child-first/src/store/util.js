// 加载所有模块。
export function loadModules() {
  const context = require.context("./modules", false, /([a-z_]+)\.module.js$/i);
  const modules = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.module.js$/i)[1] }))
    .reduce(
      (modules, { key, name }) => ({
        ...modules,
        [name]: context(key).default,
      }),
      {}
    );
  return { context, modules };
}
