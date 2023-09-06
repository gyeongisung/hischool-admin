import { client } from "../api/client";

// 학생관리 리스트
export const getStudentData = async (
  page,
  setStudentListData,
  setTotalPage,
) => {
  try {
    const res = await client.get(`/api/admin/student-list?page=${page}`);
    const result = res.data;
    setStudentListData(result.list);
    setTotalPage(result.totalCount);
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

// 학생 검색
export const getStudentSearchList = async (
  searchText,
  page,
  setStudentListData,
  setTotalPage,
) => {
  try {
    const res = await client.get(
      `/api/admin/name-student-list?search=${searchText}&page=${page}`,
    );
    const result = res.data;
    console.log(result);
    setStudentListData(result.list);
    setTotalPage(result.totalCount);
  } catch (err) {
    console.log(err);
  }
};

// 학생 필터링
export const getFilterStudentList = async (
  page,
  grade,
  classNum,
  enrollState,
  setStudentListData,
  setTotalPage,
) => {
  try {
    console.log("안녕");
    console.log(page, grade, classNum, enrollState);
    let res;
    if (grade && !classNum && !enrollState) {
      console.log("1");
      res = await client.get(
        `/api/admin/name-student-list?grade=${grade}&page=${page}`,
      );
    } else if (grade && classNum && !enrollState) {
      console.log("2");
      res = await client.get(
        `/api/admin/name-student-list?classNum=${classNum}&grade=${grade}&page=${page}`,
      );
    } else if (grade && classNum && enrollState) {
      console.log("3");
      res = await client.get(
        `/api/admin/name-student-list?classNum=${classNum}&grade=${grade}&page=${page}&enrollState=${enrollState}`,
      );
    } else if (!grade && !classNum && enrollState) {
      console.log("4");
      res = await client.get(
        `/api/admin/name-student-list?page=${page}&enrollState=${enrollState}`,
      );
    }
    const result = res.data;
    console.log(result);
    setStudentListData(result.list);
    setTotalPage(result.totalCount);
  } catch (err) {
    console.log(err);
  }
};

// 학반 정보 GET
export const getClassInfo = async (grade, setClassList) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  try {
    const res = await client.get(`/api/admin/tc/${todayYear}/${grade}`);
    const result = res.data;
    setClassList(result);
  } catch (err) {
    console.log(err);
  }
};

// 학반 정보 변경
export const patchGradeClassInfo = async (payload, userId) => {
  try {
    const res = await client.patch(`/api/admin/user-statement`, {
      ...payload,
      userId: userId,
    });
  } catch (err) {
    console.log(err);
  }
};
