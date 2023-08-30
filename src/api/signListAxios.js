import { client } from "../api/client";

// 교원 가입 대기 명단
export const getSignListData = async (page, setListData, setCount) => {
  try {
    const res = await client.get(`/api/admin/tc?page=${page}&size=16&sort=`);
    const result = res.data.list;
    console.log(result);
    setListData(result);
    const totalCount = res.data.totalCount;
    setCount(totalCount);
  } catch (err) {
    console.log(err);
  }
};

// 교원 가입 승인
export const putSignAccept = async userId => {
  try {
    const res = await client.put(`/api/admin/tc?userId=${userId}`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
