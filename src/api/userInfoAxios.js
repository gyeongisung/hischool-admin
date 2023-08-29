import { client } from "./client";

export const getUserInfo = async (setUserImg, setUserName, setUserEmail) => {
  try {
    const res = await client.get(`/api/side`);
    const result = res.data;
    const userName = result.nm;
    const userEmail = result.email;
    const userImg = result.pic;
    if (setUserImg) {
      setUserImg(userImg);
    }
    if (setUserName) {
      setUserName(userName);
    }
    if (setUserEmail) {
      setUserEmail(userEmail);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolLogo = async setSchoolLogo => {
  try {
    const res = await client.get(`/api/header/school-logo`);
    const result = res.data.logo;
    setSchoolLogo(result);
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolInfo = async setSchoolName => {
  try {
    const res = await client.get(`/api/header/school-info`);
    const result = res.data;
    const userSchool = result.nm;
    setSchoolName(userSchool);
  } catch (err) {
    console.log(err);
  }
};
