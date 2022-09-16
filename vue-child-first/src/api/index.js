import axios from "axios";
import qs from "qs";

export async function ruleBaseBatchDeleteReq(params) {
  return axios.get(`/setup/rule-base/batch-delete/ids=${qs.stringify(params)}`);
}

export async function ruleBaseDeleteReq(params) {
  return axios.get(`/setup/rule-base/delete/id=${params.id}`);
}

export async function ruleBaseEditReq(params) {
  return axios.get(`/setup/rule-base/edit?${qs.stringify(params)}`);
}

export async function ruleBaseGetReq(params) {
  return axios.get(`/setup/rule-base/get?${qs.stringify(params)}`);
}

export async function ruleBaseListReq(params) {
  return axios.get(`/setup/rule-base/list?${qs.stringify(params)}`);
}

export async function ruleBasePageReq(params) {
  return axios.get(`/setup/rule-base/page?${qs.stringify(params)}`);
}

export async function ruleBaseSaveReq(params) {
  return axios.post("/setup/rule-base/save", params);
}
