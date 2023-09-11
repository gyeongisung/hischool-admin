import { client } from "../api/client";

export const getTeacherList = async (
  page,
  setListData,
  setCount,
  search,
  enrollFilter,
) => {
  try {
    const res = await client.get(
      `/api/admin/tc/all?page=${page}&size=16&sort=&search=${search}&enrollState=${enrollFilter}`,
    );
    const result = res.data.list;
    setListData(result);
    const totalCount = res.data.totalCount;
    setCount(totalCount);
  } catch (err) {
    console.log(err);
  }
};
