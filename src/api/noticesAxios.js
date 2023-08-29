import { client } from "./client";

// 공지사항 리스트
export const getNoticeList = async setNoticeData => {
  try {
    const res = await client.get(`/api/notice`, { timeout: 1000 });
    const result = res.data;
    setNoticeData(result);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

// 글 등록
export const postNoticeData = async dataToSend => {
  try {
    const response = await client.post("/api/notice", dataToSend);
    console.log("response", response);
  } catch (err) {
    console.error(err);
  }
};

// 게시판 글 가져오기
export const getNoticeData = async noticeId => {
  try {
    const res = await client.get(`/api/notice/bynotice?noticeId=${noticeId}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const patchNoticeData = async dataToSend => {
  try {
    const response = await client.patch(`/api/notice`, dataToSend);
    console.log("글 수정 : ", response);
  } catch (err) {
    console.error(err);
  }
};

export const delectNoticeData = async noticeId => {
  try {
    const res = await client.delete(`/api/notice?noticeId=${noticeId}`);
    console.log("글 삭제", res);
  } catch (err) {
    console.error(err);
  }
};
