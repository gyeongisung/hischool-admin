import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AdminHomeDiv,
  FullCalendarDiv,
  StatusCountDiv,
} from "../styles/AdminHomeStyle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getAllMemberStatus, getSchedule } from "../api/adminHomeAxios";
import HomeNotice from "../components/adminHome/HomeNotice";
import NumberList from "../components/adminHome/NumberList";

const AdminHome = () => {
  const calRef = useRef(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [memberStatus, setMemberStatus] = useState("");

  // 현재 기준 캘린더 날짜
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = (today.getMonth() + 1).toString();
  const monthEndDate = new Date(todayYear, todayMonth, 0).getDate();
  const todayStartDate =
    todayYear + (todayMonth.length <= 1 ? "0" + todayMonth : todayMonth) + "01";
  const todayEndDate =
    todayYear +
    (todayMonth.length <= 1 ? "0" + todayMonth : todayMonth) +
    monthEndDate;

  const [startDate, setStartDate] = useState(todayStartDate);
  const [endDate, setEndDate] = useState(todayEndDate);

  // 캘린더 월 변경
  const handleDatesSet = () => {
    if (calRef.current) {
      const calApi = calRef.current.getApi();
      const currentYear = calApi.getDate().getYear() + 1900;
      const currentMonth = (calApi.getDate().getMonth() + 1).toString();
      const endDateDay = new Date(currentYear, currentMonth, 0).getDate();
      const startDate =
        currentYear +
        (currentMonth.length <= 1 ? "0" + currentMonth : currentMonth) +
        "01";
      const endDate =
        currentYear +
        (currentMonth.length <= 1 ? "0" + currentMonth : currentMonth) +
        endDateDay;
      setStartDate(startDate);
      setEndDate(endDate);
    }
  };

  useState(() => {
    getAllMemberStatus(setMemberStatus);
    getSchedule(setScheduleData, startDate, endDate);
  }, []);

  return (
    <AdminHomeDiv>
      <StatusCountDiv>
        <div className="student-status-wrap">
          <h3>학생 현황</h3>
          <div className="student-status">
            <span>총 인원:</span>
            <Link to="/studentlist">
              <span className="student-num">{memberStatus.stdNum}</span>
            </Link>
            <span>명</span>
          </div>
        </div>
        <div className="teacher-status-wrap">
          <h3>교원 현황</h3>
          <div className="teacher-status">
            <span>총 인원:</span>
            <Link to="/teacherlist">
              <span className="teacher-num">{memberStatus.tcNum}</span>
            </Link>
            <span>명</span>
            <span>(승인 대기 인원:</span>
            <Link to="/signlist">
              <span className="teacher-num">{memberStatus.tcWaitingNum}</span>
            </Link>
            <span>명)</span>
          </div>
        </div>
      </StatusCountDiv>
      <div className="bottom-wrap">
        <div className="calendar">
          <FullCalendarDiv>
            <FullCalendar
              ref={calRef}
              height="74vh"
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locale="ko"
              dayCellContent={day => day.dayNumberText.replace("일", "")}
              events={scheduleData}
              eventColor="transparent"
              eventTextColor="#555"
              dayMaxEvents={true}
              datesSet={handleDatesSet}
              moreLinkContent={args => {
                return <span>{"+" + args.num}</span>;
              }}
              headerToolbar={{
                start: "prev",
                center: "title",
                end: "next today",
              }}
            />
          </FullCalendarDiv>
        </div>
        <div className="bottom-right-wrap">
          <HomeNotice />
          <NumberList />
        </div>
      </div>
    </AdminHomeDiv>
  );
};

export default AdminHome;
