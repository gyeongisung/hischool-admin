import { client } from "./client";

// 서버로 내신 과목 데이터 전송
export const postALLData = async (grade, dataToSend) => {
  try {
    const response = await client.post(
      `/api/admin/sbj?grade=${parseInt(grade)}`,
      {
        list: dataToSend,
      },
    );
    return response;
  } catch (error) {
    console.error("데이터 전송 오류:", error);
    if (error.response && error.response.status === 500) {
      alert(
        "서버 내부 오류가 발생했습니다. 이미 있는 과목이거나, 서버 전송 오류입니다.",
      );
    }
  }
};

// 내신 과목 계열
export const getALLMainSubData = async () => {
  try {
    const res = await client.get("/api/admin/sbj/cate");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 내신 세부 과목
export const getALLSubData = async categoryid => {
  try {
    const res = await client.get(`/api/admin/sbj/cate/${categoryid}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getSubData = async categoryid => {
  try {
    const res = await client.get(`/api/admin/sbj/cate2/${categoryid}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 내신고사 과목 데이터 리스트
export const getALLSubListData = async grade => {
  try {
    const res = await client.get(`/api/admin/sbj/category/${grade}`);
    const result = res.data;
    return result;
  } catch (err) {
    return [];
  }
};

export const editSubList = async (gradeId, postDataList) => {
  try {
    const res = await client.put(
      `/api/admin/sbj?grade=${gradeId}`,
      postDataList,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
