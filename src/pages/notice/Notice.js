import React, { useEffect, useState } from "react";
import {
  NoticeBoard,
  NoticeInput,
  NoticeTitle,
  NoticeWrap,
  PaginationContainer,
} from "../../styles/notice/NoticeStyle";
import { Link, useNavigate } from "react-router-dom";
import { getNoticeList, searchNotice } from "../../api/noticesAxios";
import NoticePaging from "../../components/notice/NoticePaging";

const Notice = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 중요 공지사항과 일반 공지사항을 분리하여 저장
  const importantNotices = noticeData.filter(notice => notice.imptYn === 1);
  const normalNotices = noticeData.filter(notice => notice.imptYn === 0);

  // 마지막 4개의 중요 공지사항을 가져오고, 공지사항 ID를 기준으로 정렬
  const last4ImportantNotices = importantNotices
    .slice(-4)
    .sort((a, b) => b.noticeId - a.noticeId);

  // 나머지 중요 공지사항 가져오기
  const otherImportantNotices = importantNotices.slice(0, -4);

  // 중요 공지사항과 일반 공지사항을 합치기
  const combinedNotices = [...otherImportantNotices, ...normalNotices];
  const totalNoticeCount = combinedNotices.length; // 총 공지사항 수 계산
  const sortedcombinedNotices = combinedNotices.sort(
    (a, b) => b.noticeId - a.noticeId,
  ); // 공지사항을 ID를 기준으로 정렬

  // 현재 페이지에 해당하는 일반 공지사항 목록 가져오기
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentNormalItems = sortedcombinedNotices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  useEffect(() => {
    function fetchData() {
      try {
        getNoticeList(setNoticeData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setNoticeData]);

  const handleSearchClick = async () => {
    try {
      const result = await searchNotice(search);
      // 검색 결과를 화면에 출력하거나 다른 작업을 수행
      console.log("search result", result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWritingClick = () => {
    navigate("/notice/writing");
  };

  return (
    <NoticeWrap>
      <NoticeTitle>
        <h3>공지사항</h3>
      </NoticeTitle>
      <NoticeInput>
        <form>
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            name="search-bar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="button" onClick={handleSearchClick}>
            검색
          </button>
        </form>
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
              <li>{totalNoticeCount - (index + 10 * (currentPage - 1))}</li>
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
        <NoticePaging
          currentPage={currentPage}
          totalNoticeCount={totalNoticeCount}
          setCurrentPage={setCurrentPage}
        />
      </PaginationContainer>
    </NoticeWrap>
  );
};

export default Notice;
