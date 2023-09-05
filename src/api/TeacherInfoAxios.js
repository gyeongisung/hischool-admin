import { client } from "../api/client";

export const getTcDetailData = async (
  setUserData,
  userId,
  setVanNum,
  setEnrollFilter,
) => {
  try {
    const res = await client.get(`/api/admin/tc/${userId}`);
    const result = res.data;
    setUserData(result);
    setVanNum(result.vanNum);
    setEnrollFilter(result.enrollState);
  } catch (err) {
    console.error(err);
  }
};

export const patchMyPageData = async (userId, enrollFilter, grade, vanNum) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  console.log(userId, enrollFilter, grade, vanNum, todayYear);
  try {
    const res = await client.patch(`/api/admin/tc`, {
      userId: userId,
      enrollState: enrollFilter,
      year: todayYear,
      grade: grade,
      classNum: vanNum,
    });
    console.log(res.data);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const getTeacherGrade = async (grade, setGradeList) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  try {
    const res = await client.get(`/api/admin/tc/${todayYear}/${grade}`);
    setGradeList(res.data);
  } catch (err) {
    console.log(err);
  }
};
