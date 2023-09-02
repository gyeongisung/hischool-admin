import { client } from "../api/client";

export const getTeacherList = async (page, setListData, setCount, search) => {
  try {
    const res = await client.get(
      `/api/admin/tc/all?page=${page}&size=16&sort=&search=${search}`,
    );
    const result = res.data.list;
    setListData(result);
    const totalCount = res.data.totalCount;
    setCount(totalCount);
    console.log(totalCount);
  } catch (err) {
    console.log(err);
  }
};
