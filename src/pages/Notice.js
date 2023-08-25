import React, { useState } from "react";
import {
  NoticeBoard,
  NoticeInput,
  NoticeTitle,
  NoticeWrap,
} from "../styles/NoticeStyle";
import NoticePaging from "../components/NoticePaging";
import { Link } from "react-router-dom";

const noticeData = [
  {
    id: 1,
    title: "공지사항 제목 1",
    writer: "관리자",
    creationDate: "2023-03-01",
    views: 1254,
    importantNotice: false,
  },
  {
    id: 2,
    title: "공지사항 제목 2",
    writer: "관리자",
    creationDate: "2023-03-01",
    views: 140,
    importantNotice: true,
  },
  {
    id: 3,
    title: "공지사항 제목 3",
    writer: "관리자",
    creationDate: "2023-03-01",
    views: 100,
    importantNotice: false,
  },
  {
    id: 4,
    title: "공지사항 제목 4",
    writer: "관리자",
    creationDate: "2023-03-02",
    views: 120,
    importantNotice: true,
  },
  {
    id: 5,
    title: "공지사항 제목 5",
    writer: "관리자",
    creationDate: "2023-03-10",
    views: 129,
    importantNotice: false,
  },
  {
    id: 6,
    title: "공지사항 제목 6",
    writer: "관리자",
    creationDate: "2023-07-10",
    views: 109,
    importantNotice: false,
  },
  {
    id: 7,
    title: "공지사항 제목 7",
    writer: "관리자",
    creationDate: "2023-07-10",
    views: 414,
    importantNotice: false,
  },
  {
    id: 8,
    title: "공지사항 제목 8",
    writer: "관리자",
    creationDate: "2023-07-11",
    views: 234,
    importantNotice: false,
  },
  {
    id: 9,
    title: "공지사항 제목 9",
    writer: "관리자",
    creationDate: "2023-07-13",
    views: 164,
    importantNotice: false,
  },
  {
    id: 10,
    title: "공지사항 제목 10",
    writer: "관리자",
    creationDate: "2023-07-13",
    views: 154,
    importantNotice: true,
  },
  {
    id: 11,
    title: "공지사항 제목 11",
    writer: "관리자",
    creationDate: "2023-07-14",
    views: 300,
    importantNotice: false,
  },
  {
    id: 12,
    title: "공지사항 제목 12",
    writer: "관리자",
    creationDate: "2023-07-23",
    views: 209,
    importantNotice: false,
  },
  {
    id: 13,
    title: "공지사항 제목 13",
    writer: "관리자",
    creationDate: "2023-08-23",
    views: 184,
    importantNotice: true,
  },
  {
    id: 14,
    title: "공지사항 제목 14",
    writer: "관리자",
    creationDate: "2023-08-26",
    views: 280,
    importantNotice: false,
  },
  {
    id: 15,
    title: "공지사항 제목 15",
    writer: "관리자",
    creationDate: "2023-08-26",
    views: 179,
    importantNotice: false,
  },
  {
    id: 16,
    title: "공지사항 제목 16",
    writer: "관리자",
    creationDate: "2023-08-27",
    views: 270,
    importantNotice: false,
  },
  {
    id: 17,
    title: "공지사항 제목 17",
    writer: "관리자",
    creationDate: "2023-08-28",
    views: 349,
    importantNotice: false,
  },
  {
    id: 18,
    title: "공지사항 제목 18",
    writer: "관리자",
    creationDate: "2023-08-29",
    views: 1254,
    importantNotice: false,
  },
  {
    id: 19,
    title: "공지사항 제목 19",
    writer: "관리자",
    creationDate: "2023-08-30",
    views: 1140,
    importantNotice: true,
  },
  {
    id: 20,
    title: "공지사항 제목 20",
    writer: "관리자",
    creationDate: "2023-09-26",
    views: 100,
    importantNotice: false,
  },
  {
    id: 21,
    title: "공지사항 제목 21",
    writer: "관리자",
    creationDate: "2023-09-28",
    views: 1120,
    importantNotice: true,
  },
  {
    id: 22,
    title: "공지사항 제목 22",
    writer: "관리자",
    creationDate: "2023-09-30",
    views: 1129,
    importantNotice: false,
  },
  {
    id: 23,
    title: "공지사항 제목 23",
    writer: "관리자",
    creationDate: "2023-10-01",
    views: 1109,
    importantNotice: false,
  },
  {
    id: 24,
    title: "공지사항 제목 24",
    writer: "관리자",
    creationDate: "2023-10-02",
    views: 1414,
    importantNotice: false,
  },
  {
    id: 25,
    title: "공지사항 제목 25",
    writer: "관리자",
    creationDate: "2023-10-03",
    views: 1234,
    importantNotice: false,
  },
  {
    id: 26,
    title: "공지사항 제목 26",
    writer: "관리자",
    creationDate: "2023-10-04",
    views: 1164,
    importantNotice: false,
  },
  {
    id: 27,
    title: "공지사항 제목 27",
    writer: "관리자",
    creationDate: "2023-10-05",
    views: 1154,
    importantNotice: true,
  },
  {
    id: 28,
    title: "공지사항 제목 28",
    writer: "관리자",
    creationDate: "2023-10-06",
    views: 1300,
    importantNotice: false,
  },
  {
    id: 29,
    title: "공지사항 제목 29",
    writer: "관리자",
    creationDate: "2023-10-07",
    views: 1209,
    importantNotice: false,
  },
  {
    id: 30,
    title: "공지사항 제목 30",
    writer: "관리자",
    creationDate: "2023-10-08",
    views: 1184,
    importantNotice: true,
  },
  {
    id: 31,
    title: "공지사항 제목 31",
    writer: "관리자",
    creationDate: "2023-10-26",
    views: 1280,
    importantNotice: false,
  },
  {
    id: 32,
    title: "공지사항 제목 32",
    writer: "관리자",
    creationDate: "2023-10-26",
    views: 1179,
    importantNotice: false,
  },
  {
    id: 33,
    title: "공지사항 제목 33",
    writer: "관리자",
    creationDate: "2023-10-26",
    views: 1270,
    importantNotice: false,
  },
  {
    id: 34,
    title: "공지사항 제목 34",
    writer: "관리자",
    creationDate: "2023-10-26",
    views: 1360,
    importantNotice: true,
  },
  {
    id: 35,
    title: "공지사항 제목 35",
    writer: "관리자",
    creationDate: "2023-10-27",
    views: 1349,
    importantNotice: false,
  },
];

const Notice = () => {
  // 현재 페이지 상태를 관리하는 상태 변수
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지당 보여질 일반 공지 개수
  const itemsPerPage = 10;

  // 중요한 공지와 일반 공지를 필터링
  const importantNotices = noticeData.filter(notice => notice.importantNotice); //중요공지
  const normalNotices = noticeData.filter(notice => !notice.importantNotice); //일반공지

  // 중요한 공지 중 마지막 4개를 유지, 나머지 중요한 공지는 일반 공지로 처리
  const last4ImportantNotices = importantNotices
    .slice(-4) // 항상 마지막 4개 선택
    .sort((a, b) => b.id - a.id); // id 역순 정렬
  const otherImportantNotices = importantNotices.slice(0, -4); // 마지막에서 4번째를 제외하고 나머지

  // 마지막에서 4번째를 제외하고 중요한 공지와 일반 공지를 합친 배열
  const combinedNotices = [...otherImportantNotices, ...normalNotices];
  // 총 개수
  const totalcombinedNoticeCount = combinedNotices.length;
  // 역순 배치
  const sortedcombinedNotices = combinedNotices.sort((a, b) => b.id - a.id);

  // 현재 페이지에서 보여줄 공지의 첫 번째와 마지막 인덱스를 계산
  const indexOfLastItem = currentPage * itemsPerPage; // 현재 보여지는 페이지 갯수
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 한페이지에서 보여줄 항목의 갯수

  // 현재 페이지 일반 공지 배열
  const currentNormalItems = sortedcombinedNotices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  return (
    <NoticeWrap>
      <NoticeTitle>
        <h3>공지사항</h3>
      </NoticeTitle>
      <NoticeInput>
        <div>
          <input type="text" placeholder="검색어를 입력하세요." />
          <button>검색</button>
        </div>
        <button className="writing">
          <Link to={`/write`}>글쓰기</Link>
        </button>
      </NoticeInput>
      <NoticeBoard>
        <ul className="title-wrap">
          <li className="table-numer">번호</li>
          <li className="table-title">제목</li>
          <li className="table-writer">작성자</li>
          <li className="table-creationdate">등록일</li>
          <li className="table-views">조회수</li>
        </ul>
        <div className="notice-list">
          {last4ImportantNotices.map(notice => (
            <ul key={notice.id} className="important-notice">
              <li>
                <span>중요</span>
              </li>
              <li>{notice.title}</li>
              <li>{notice.writer}</li>
              <li>{notice.creationDate}</li>
              <li>{notice.views}</li>
            </ul>
          ))}
          {currentNormalItems.map((notice, index) => (
            <ul key={notice.id}>
              <li>
                {totalcombinedNoticeCount -
                  (index + itemsPerPage * (currentPage - 1))}
              </li>
              <li>{notice.title}</li>
              <li>{notice.writer}</li>
              <li>{notice.creationDate}</li>
              <li>{notice.views}</li>
            </ul>
          ))}
        </div>
      </NoticeBoard>
      <NoticePaging
        page={currentPage}
        setPage={setCurrentPage}
        totalnotice={normalNotices.length}
        totalpage={totalcombinedNoticeCount}
      />
    </NoticeWrap>
  );
};

export default Notice;
