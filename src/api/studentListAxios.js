import { client } from "../api/client";

// 학생관리 리스트
export const getStudentData = async setStudentListData => {
  try {
    const res = await client.get(`/api/admin/student-list?page=1`);
    const result = res.data;
    setStudentListData(result);
  } catch (err) {
    console.error(err);
  }
};

// 학생 학적구분 변경
export const patchStudentAttend = async (saveCheckBox, attendState) => {
  try {
    let res;
    if (attendState === "enroll") {
      res = client.patch(`/api/admin/enroll-user?userId=${saveCheckBox}`);
    } else if (attendState === "graduation") {
      res = client.patch(`/api/admin/grad-user?userId=${saveCheckBox}`);
    } else if (attendState === "transfer") {
      res = client.patch(`/api/admin/tran-user?userId=${saveCheckBox}`);
    } else {
      res = client.patch(`/api/admin/leave-user?userId=${saveCheckBox}`);
    }
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};
