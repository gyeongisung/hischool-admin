import React, { useState } from "react";
import {
  NoticeBoard,
  NoticeInput,
  NoticeTitle,
  PaginationContainer,
} from "../styles/NoticeStyle";

const noticeData = [
  {
    id: 1,
    title: "공지사항 제목 1",
    writer: "관리자 1",
    creationDate: "2023-03-01",
    views: 1254,
    importantNotice: false,
  },
  {
    id: 2,
    title: "공지사항 제목 2",
    writer: "관리자 2",
    creationDate: "2023-03-01",
    views: 140,
    importantNotice: true,
  },
  {
    id: 3,
    title: "공지사항 제목 3",
    writer: "관리자 3",
    creationDate: "2023-03-01",
    views: 100,
    importantNotice: false,
  },
  {
    id: 4,
    title: "공지사항 제목 4",
    writer: "관리자 1",
    creationDate: "2023-03-02",
    views: 120,
    importantNotice: true,
  },
  {
    id: 5,
    title: "공지사항 제목 5",
    writer: "관리자 1",
    creationDate: "2023-03-10",
    views: 129,
    importantNotice: false,
  },
  {
    id: 109,
    title: "공지사항 제목 6",
    writer: "관리자 5",
    creationDate: "2023-07-10",
    views: 109,
    importantNotice: false,
  },
  {
    id: 110,
    title: "공지사항 제목 7",
    writer: "관리자 17",
    creationDate: "2023-07-10",
    views: 414,
    importantNotice: false,
  },
  {
    id: 128,
    title: "공지사항 제목 9",
    writer: "관리자 12",
    creationDate: "2023-07-11",
    views: 234,
    importantNotice: false,
  },
  {
    id: 139,
    title: "공지사항 제목 10",
    writer: "관리자 11",
    creationDate: "2023-07-13",
    views: 164,
    importantNotice: false,
  },
  {
    id: 140,
    title: "공지사항 제목 11",
    writer: "관리자 15",
    creationDate: "2023-07-13",
    views: 154,
    importantNotice: true,
  },
  {
    id: 150,
    title: "공지사항 제목 12",
    writer: "관리자 14",
    creationDate: "2023-07-14",
    views: 300,
    importantNotice: false,
  },
  {
    id: 160,
    title: "공지사항 제목 13",
    writer: "관리자 12",
    creationDate: "2023-07-23",
    views: 209,
    importantNotice: false,
  },
  {
    id: 161,
    title: "공지사항 제목 14",
    writer: "관리자 111",
    creationDate: "2023-08-23",
    views: 184,
    importantNotice: true,
  },
  {
    id: 162,
    title: "공지사항 제목 17",
    writer: "관리자 14",
    creationDate: "2023-08-26",
    views: 280,
    importantNotice: false,
  },
  {
    id: 164,
    title: "공지사항 제목 28",
    writer: "관리자 12",
    creationDate: "2023-08-26",
    views: 179,
    importantNotice: false,
  },
  {
    id: 165,
    title: "공지사항 제목 30",
    writer: "관리자 12",
    creationDate: "2023-08-26",
    views: 270,
    importantNotice: false,
  },
  {
    id: 166,
    title: "공지사항 제목 31",
    writer: "관리자 14",
    creationDate: "2023-08-26",
    views: 349,
    importantNotice: false,
  },
];

const itemsPerPage = 10;

const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const importantNotices = noticeData.filter(notice => notice.importantNotice);
  const normalNotices = noticeData.filter(notice => !notice.importantNotice);

  // 중요 공지를 중요도에 따라 id 역순으로 정렬
  const sortedImportantNotices = importantNotices.sort((a, b) => b.id - a.id);
  // 일반 공지를 id 역순으로 정렬
  const sortedNormalNotices = normalNotices.sort((a, b) => b.id - a.id);

  const totalNormalNoticeCount = sortedNormalNotices.length;
  const totalPages = Math.ceil(totalNormalNoticeCount / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNormalItems = sortedNormalNotices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <NoticeTitle>
        <h1>공지사항 목록</h1>
      </NoticeTitle>
      <NoticeInput>
        <tr>
          <th>
            <input type="text" placeholder="제목" />
          </th>
          <td>
            <button>검색</button>
          </td>
          <td>
            <button className="writing">글쓰기</button>
          </td>
        </tr>
      </NoticeInput>
      <NoticeBoard>
        <thead>
          <tr>
            <td className="table-numer">번호</td>
            <td className="table-title">제목</td>
            <td className="table-writer">작성자</td>
            <td className="table-creationdate">등록일</td>
            <td className="table-views">조회수</td>
          </tr>
        </thead>
        <tbody>
          {sortedImportantNotices.map(notice => (
            <tr key={notice.id} className="important-notice">
              <td>중요</td>
              <th>{notice.title}</th>
              <td>{notice.writer}</td>
              <td>{notice.creationDate}</td>
              <td>{notice.views}</td>
            </tr>
          ))}
          {currentNormalItems.map((notice, index) => (
            <tr key={notice.id}>
              <td>
                {totalNormalNoticeCount -
                  (index + itemsPerPage * (currentPage - 1))}
              </td>
              <th>{notice.title}</th>
              <td>{notice.writer}</td>
              <td>{notice.creationDate}</td>
              <td>{notice.views}</td>
            </tr>
          ))}
        </tbody>
      </NoticeBoard>
      <PaginationContainer>
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </PaginationContainer>
    </div>
  );
};

export default Notice;
