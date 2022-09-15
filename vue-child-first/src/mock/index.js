const {
  ruleBaseBatchDeleteData,
  ruleBaseDeleteData,
  ruleBaseEditData,
  ruleBaseGetData,
  ruleBaseListData,
  ruleBasePageData,
  ruleBaseSaveData,
} = require("./data.js");

module.exports = (app) => {
  app.get("/setup/rule-base/batch-delete", ruleBaseBatchDeleteData);
  app.get("/setup/rule-base/delete/", ruleBaseDeleteData);
  app.get("/setup/rule-base/edit", ruleBaseEditData);
  app.get("/setup/rule-base/get/", ruleBaseGetData);
  app.get("/setup/rule-base/list", ruleBaseListData);
  app.get("/setup/rule-base/page", ruleBasePageData);
  app.get("/setup/rule-base/save", ruleBaseSaveData);
};
