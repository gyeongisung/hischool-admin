import { client } from "./client";

// 현황
export const getAllMemberStatus = async setMemberStatus => {
  const res = await client.get(`/api/admin/status`);
  const result = res.data;
  setMemberStatus(result);
};

// 공지사항
export const getMainNoticeList = async setNoticeList => {
  const res = await client.get(`/api/admin/main-notice`);
  const result = res.data;
  setNoticeList(result);
};

// 학사일정
export const getSchedule = async (setScheduleData, startDate, endDate) => {
  try {
    const res = await client.get(
      `/api/schedule?aaFromYmd=${startDate}&aaToYmd=${endDate}`,
    );
    const scheduleList = res.data.infoList;
    const newScheduleList = scheduleList.map(item => {
      return {
        title: item.eventNm,
        start: item.aaYmd,
        end: item.aaYmd,
      };
    });
    setScheduleData(newScheduleList);
  } catch (err) {
    console.log(err);
  }
};
