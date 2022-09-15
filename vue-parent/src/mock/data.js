const Mock = require("mockjs");

const userinfoData = (req, res) => {
  return res.json({
    status: 200,
    message: "成功",
    data: Mock.mock({
      uid: Mock.mock("@guid()"),
      "id|1": "@id",
      "name|+1": "@name",
      "age|0-100": 0,
      "gender|+1": ["0", "1"],
      "job|1": ["WEB", "JAVA"],
    }),
  });
};

module.exports = {
  userinfoData,
};
