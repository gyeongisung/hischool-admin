import React, { useEffect, useState } from "react";
import {
  NoticeBoard,
  NoticeInput,
  NoticeTitle,
  NoticeWrap,
  PaginationContainer,
} from "../../styles/notice/NoticeStyle";
import { Link, useNavigate } from "react-router-dom";
import { getNoticeList } from "../../api/noticesAxios";
import Pagination from "react-js-pagination";

const Notice = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 10;

  const importantNotices = noticeData.filter(notice => notice.imptYn === 1);
  const normalNotices = noticeData.filter(notice => notice.imptYn === 0);

  const last4ImportantNotices = importantNotices
    .slice(-4)
    .sort((a, b) => b.noticeId - a.noticeId);
  const otherImportantNotices = importantNotices.slice(0, -4);

  const combinedNotices = [...otherImportantNotices, ...normalNotices];
  const totalcombinedNoticeCount = combinedNotices.length;
  const sortedcombinedNotices = combinedNotices.sort(
    (a, b) => b.noticeId - a.noticeId,
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentNormalItems = sortedcombinedNotices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  useEffect(() => {
    async function fetchData() {
      try {
        await getNoticeList(setNoticeData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setNoticeData]);

  const handleWritingClick = () => {
    navigate("/notice/writing");
  };

  return (
    <NoticeWrap>
      <NoticeTitle>
        <h3>공지사항</h3>
      </NoticeTitle>
      <NoticeInput>
        <div>
          <input
            type="text"
            name="search-bar"
            placeholder="검색어를 입력하세요."
          />
          <button>검색</button>
        </div>
        <button className="writing" onClick={handleWritingClick}>
          글쓰기
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
            <ul key={notice.noticeId} className="important-notice">
              <li>
                <span>중요</span>
              </li>
              <li>
                <Link to={`/notice/${notice.noticeId}`}>{notice.title}</Link>
              </li>
              <li>관리자{notice.userId}</li>
              <li>{notice.createdAt.split("T", 1)}</li>
              <li>{notice.hits}</li>
            </ul>
          ))}
          {currentNormalItems.map((notice, index) => (
            <ul key={notice.noticeId}>
              <li>
                {totalcombinedNoticeCount -
                  (index + itemsPerPage * (currentPage - 1))}
              </li>
              <li>
                <Link to={`/notice/${notice.noticeId}`}>{notice.title}</Link>
              </li>
              <li>관리자{notice.userId}</li>
              <li>{notice.createdAt.split("T", 1)}</li>
              <li>{notice.hits}</li>
            </ul>
          ))}
        </div>
      </NoticeBoard>
      <PaginationContainer>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={totalcombinedNoticeCount}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={setCurrentPage}
        />
      </PaginationContainer>
    </NoticeWrap>
  );
};

export default Notice;
