const Mock = require("mockjs");

const ruleBaseBatchDeleteData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        code: 200,
        message: "删除成功",
      },
    })
  );
};

const ruleBaseDeleteData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        code: 200,
        message: "删除成功",
      },
    })
  );
};

const ruleBaseEditData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        status: 200,
        message: "修改成功",
      },
    })
  );
};

const ruleBaseGetData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        status: 200,
        message: "成功",
        data: {
          "id|1": "@id",
          "createdBy|+1": "@name",
          "createdTime|+1": Mock.mock('@date("yyyy-MM-dd HH:mm:ss")'),
          "differenceProcessing|+1": [
            "差值绝对值",
            "差值小于",
            "差值小于等于",
            "差值大于",
            "差值大于等于",
          ],
          "differenceValue|1-10": 0,
          "flowField|1-2": ["1", "2"],
          "flowMergeConditions|+1": [
            {
              code: "businessType",
              name: "业务子类",
              type: "计划字段",
            },
            {
              code: "fundCode",
              name: "基金代码",
              type: "计划字段",
            },
            {
              code: "businessCategory",
              name: "业务大类",
              type: "计划字段",
            },
            {
              code: "counterpartyAccountName",
              name: "对方账户名称",
              type: "计划字段",
            },
            {
              code: "accountName",
              name: "本方账户名称",
              type: "计划字段",
            },
            {
              code: "counterpartyBankName",
              name: "对方开户银行",
              type: "计划字段",
            },
            {
              code: "bankName",
              name: "本方开户银行",
              type: "计划字段",
            },
            {
              code: "bankAccount",
              name: "本方银行账号",
              type: "计划字段",
            },
            {
              code: "planAmountIncurred",
              name: "计划发生金额",
              type: "计划字段",
            },
            {
              code: "counterpartyBankAccount",
              name: "对方银行账号",
              type: "计划字段",
            },
            {
              code: "planDate",
              name: "计划日期",
              type: "计划字段",
            },
          ],
          "flowTotalField|+1": [
            {
              code: "counterpartyAccountName",
              name: "对方账户名称",
              type: "流水字段",
            },
            {
              code: "accountName",
              name: "本方账户名称",
              type: "流水字段",
            },
          ],
          "logicalRules|+1": [
            "等于",
            "数量差值范围内",
            "比例差值范围内",
            "包含",
            "截位",
            "合计",
          ],
          "mergeField|+1": ["合并计划", "合并流水", "合并计划和流水"],
          "planField|+1": ["计划字段1", "计划字段2", "计划字段2"],
          "planMergeConditions|+1": [
            "计划合并条件1",
            "计划合并条件2",
            "计划合并条件3",
          ],
          "planTotalField|+1": ["计划合计字段1", "计划合计字段2"],
          remarks: "备注",
          "ruleType|+1": ["单一规则", "合计规则"],
          "updatedBy|1": "@name",
          "updatedTime|1": Mock.mock('@date("yyyy-MM-dd HH:mm:ss")'),
        },
      },
    })
  );
};

const ruleBaseListData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        status: 200,
        message: "成功",
        "list|1-10": [
          {
            "id|1": "@id",
            "createdBy|+1": "@name",
            "createdTime|1": Mock.mock('@date("yyyy-MM-dd HH:mm:ss")'),
            "differenceProcessing|+1": [
              "差值绝对值",
              "差值小于",
              "差值小于等于",
              "差值大于",
              "差值大于等于",
            ],
            "differenceValue|1-10": 0,
            "flowField|1-2": ["1", "2"],
            "flowMergeConditions|+1": [
              {
                code: "businessType",
                name: "业务子类",
                type: "计划字段",
              },
              {
                code: "fundCode",
                name: "基金代码",
                type: "计划字段",
              },
              {
                code: "businessCategory",
                name: "业务大类",
                type: "计划字段",
              },
              {
                code: "counterpartyAccountName",
                name: "对方账户名称",
                type: "计划字段",
              },
              {
                code: "accountName",
                name: "本方账户名称",
                type: "计划字段",
              },
              {
                code: "counterpartyBankName",
                name: "对方开户银行",
                type: "计划字段",
              },
              {
                code: "bankName",
                name: "本方开户银行",
                type: "计划字段",
              },
              {
                code: "bankAccount",
                name: "本方银行账号",
                type: "计划字段",
              },
              {
                code: "planAmountIncurred",
                name: "计划发生金额",
                type: "计划字段",
              },
              {
                code: "counterpartyBankAccount",
                name: "对方银行账号",
                type: "计划字段",
              },
              {
                code: "planDate",
                name: "计划日期",
                type: "计划字段",
              },
            ],
            "flowTotalField|+1": [
              {
                code: "counterpartyAccountName",
                name: "对方账户名称",
                type: "流水字段",
              },
              {
                code: "accountName",
                name: "本方账户名称",
                type: "流水字段",
              },
            ],
            "logicalRules|+1": [
              "等于",
              "数量差值范围内",
              "比例差值范围内",
              "包含",
              "截位",
              "合计",
            ],
            "mergeField|+1": ["合并计划", "合并流水", "合并计划和流水"],
            "planField|+1": ["计划字段1", "计划字段2", "计划字段2"],
            "planMergeConditions|+1": [
              "计划合并条件1",
              "计划合并条件2",
              "计划合并条件3",
            ],
            "planTotalField|+1": ["计划合计字段1", "计划合计字段2"],
            remarks: "备注",
            "ruleType|+1": ["单一规则", "合计规则"],
            "updatedBy|1": "@name",
            "updatedTime|1": Mock.mock('@date("yyyy-MM-dd HH:mm:ss")'),
          },
        ],
      },
    })
  );
};

const ruleBasePageData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        status: 200,
        message: "成功",
        "list|1-10": [
          {
            "id|1": "@id",
            "createdBy|+1": "@name",
            "createdTime|1": Mock.mock('@date("yyyy-MM-dd HH:mm:ss")'),
            "differenceProcessing|+1": [
              "差值绝对值",
              "差值小于",
              "差值小于等于",
              "差值大于",
              "差值大于等于",
            ],
            "differenceValue|1-10": 0,
            "flowField|1-2": ["1", "2"],
            "flowMergeConditions|+1": [
              {
                code: "businessType",
                name: "业务子类",
                type: "计划字段",
              },
              {
                code: "fundCode",
                name: "基金代码",
                type: "计划字段",
              },
              {
                code: "businessCategory",
                name: "业务大类",
                type: "计划字段",
              },
              {
                code: "counterpartyAccountName",
                name: "对方账户名称",
                type: "计划字段",
              },
              {
                code: "accountName",
                name: "本方账户名称",
                type: "计划字段",
              },
              {
                code: "counterpartyBankName",
                name: "对方开户银行",
                type: "计划字段",
              },
              {
                code: "bankName",
                name: "本方开户银行",
                type: "计划字段",
              },
              {
                code: "bankAccount",
                name: "本方银行账号",
                type: "计划字段",
              },
              {
                code: "planAmountIncurred",
                name: "计划发生金额",
                type: "计划字段",
              },
              {
                code: "counterpartyBankAccount",
                name: "对方银行账号",
                type: "计划字段",
              },
              {
                code: "planDate",
                name: "计划日期",
                type: "计划字段",
              },
            ],
            "flowTotalField|+1": [
              {
                code: "counterpartyAccountName",
                name: "对方账户名称",
                type: "流水字段",
              },
              {
                code: "accountName",
                name: "本方账户名称",
                type: "流水字段",
              },
            ],
            "logicalRules|+1": [
              "等于",
              "数量差值范围内",
              "比例差值范围内",
              "包含",
              "截位",
              "合计",
            ],
            "mergeField|+1": ["合并计划", "合并流水", "合并计划和流水"],
            "planField|+1": ["计划字段1", "计划字段2", "计划字段2"],
            "planMergeConditions|+1": [
              "计划合并条件1",
              "计划合并条件2",
              "计划合并条件3",
            ],
            "planTotalField|+1": ["计划合计字段1", "计划合计字段2"],
            remarks: "备注",
            "ruleType|+1": ["单一规则", "合计规则"],
            "updatedBy|1": "@name",
            "updatedTime|1": Mock.mock('@date("yyyy-MM-dd HH:mm:ss")'),
          },
        ],
      },
    })
  );
};

const ruleBaseSaveData = (req, res) => {
  return res.json(
    Mock.mock({
      data: {
        status: 200,
        message: "保存成功",
      },
    })
  );
};

module.exports = {
  ruleBaseBatchDeleteData,
  ruleBaseDeleteData,
  ruleBaseEditData,
  ruleBaseGetData,
  ruleBaseListData,
  ruleBasePageData,
  ruleBaseSaveData,
};
