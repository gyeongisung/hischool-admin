import { client } from "../api/client";

export const getTcDetailData = async (setUserData, userId) => {
  try {
    console.log(userId);
    const res = await client.get(`/api/admin/tc/${userId}`);
    const result = res.data;
    setUserData(result);
  } catch (err) {
    console.error(err);
  }
};

export const putMyPageData = async formData => {
  try {
    const res = await client.put(`/api/mypage/user-info-update`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};
