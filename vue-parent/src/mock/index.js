const { userinfoData } = require("./data.js");

module.exports = (app) => {
  app.get("/api/userinfo", userinfoData);
};
