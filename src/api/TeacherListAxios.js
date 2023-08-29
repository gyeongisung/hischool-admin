import { client } from "../api/client";

export const getTeacherList = async (page, setListData, setCount) => {
  try {
    const res = await client.get(
      `/api/admin/tc/all?page=${page}&size=16&sort=`,
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

// export const getTeacherSignList = async() => {
//   try {
//     const res = await client.get(`/api/admin/tc?page=${}&size=16&sort=${}`)
//     const result = res.data
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const putTeacherSign = async () => {
//   try {
//     const res = await client.put(`/api/admin/tc?teacherId=1`);
//     const result = res.data;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
