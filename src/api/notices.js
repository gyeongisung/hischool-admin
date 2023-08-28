import { client } from "../api/client";

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
///api/notice?noticeId=27&title=string&content=string&imptyn=1
// export const patchNoticeData = async dataToSend => {
//   try {
//     const response = await client.post(
//       `/api/notice?noticeId=${}&title=string&content=string&imptyn=${}`,
//       dataToSend,
//     );
//     console.log("response", response);
//   } catch (err) {
//     console.error(err);
//   }
// };
