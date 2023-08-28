import { client } from "./client";

export const getAllMemberStatus = async setMemberStatus => {
  const res = await client.get(`/api/admin/status`);
  const result = res.data;
  setMemberStatus(result);
};

export const getMainNoticeList = async setNoticeList => {
  const res = await client.get(`/api/admin/main-notice`);
  const result = res.data;
  setNoticeList(result);
};
