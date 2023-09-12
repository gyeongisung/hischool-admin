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
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchedNotice, setSearchedNotice] = useState([]);
  const [searchTotal, setSearchTotal] = useState("");

  const navigate = useNavigate();
  const important = notices.filter(notice => notice.imptYn === 1);
  const normal = notices.filter(notice => notice.imptYn === 0);
  const importantsearch = searchedNotice.filter(notice => notice.imptYn === 1);
  const normalsearch = searchedNotice.filter(notice => notice.imptYn === 0);

  const lastImportant = important
    .slice(-important.length)
    .sort((a, b) => b.noticeId - a.noticeId);
  const lastImportantsearch = importantsearch
    .slice(-importantsearch.length)
    .sort((a, b) => b.noticeId - a.noticeId);

  const totalItemsCount = totalCount - lastImportant.length;

  useEffect(() => {
    function fetchData() {
      try {
        getNoticeList(setNotices, setTotalCount, currentPage);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setNotices, setTotalCount, currentPage]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      await searchNotice(search, 1, setSearchedNotice, setSearchTotal);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnterKey = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleWriting = () => {
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
            onChange={handleChange}
            onKeyPress={handleEnterKey}
          />
          <button type="button" onClick={handleSearch}>
            검색
          </button>
        </form>
        <button className="writing" onClick={handleWriting}>
          글쓰기
        </button>
      </NoticeInput>
      <NoticeBoard>
        <ul className="title-wrap">
          <li className="table-number">번호</li>
          <li className="table-title">제목</li>
          <li className="table-writer">작성자</li>
          <li className="table-creationdate">등록일</li>
          <li className="table-views">조회수</li>
        </ul>
        <div className="notice-list">
          {searchedNotice.length > 0 ? (
            <>
              {lastImportantsearch.map(notice => (
                <ul key={notice.noticeId} className="important-notice">
                  <li>
                    <span>중요</span>
                  </li>
                  <li>
                    <Link to={`/admin/notice/${notice.noticeId}`}>
                      {notice.title}
                    </Link>
                  </li>
                  <li>관리자</li>
                  <li>{notice.createdAt.split("T", 1)}</li>
                  <li>{notice.hits}</li>
                </ul>
              ))}
              {normalsearch.map(notice => (
                <ul key={notice.noticeId}>
                  <li>{notice.noticeId}</li>
                  <li>
                    <Link to={`/admin/notice/${notice.noticeId}`}>
                      {notice.title}
                    </Link>
                  </li>
                  <li>관리자{notice.userId}</li>
                  <li>{notice.createdAt.split("T", 1)}</li>
                  <li>{notice.hits}</li>
                </ul>
              ))}
            </>
          ) : (
            <>
              {lastImportant.map(notice => (
                <ul key={notice.noticeId} className="important-notice">
                  <li>
                    <span>중요</span>
                  </li>
                  <li>
                    <Link to={`/admin/notice/${notice.noticeId}`}>
                      {notice.title}
                    </Link>
                  </li>
                  <li>관리자</li>
                  <li>{notice.createdAt.split("T", 1)}</li>
                  <li>{notice.hits}</li>
                </ul>
              ))}
              {normal.map(notice => (
                <ul key={notice.noticeId}>
                  <li>{notice.noticeId}</li>
                  <li>
                    <Link to={`/admin/notice/${notice.noticeId}`}>
                      {notice.title}
                    </Link>
                  </li>
                  <li>관리자{notice.userId}</li>
                  <li>{notice.createdAt.split("T", 1)}</li>
                  <li>{notice.hits}</li>
                </ul>
              ))}
            </>
          )}
        </div>
      </NoticeBoard>
      <PaginationContainer>
        <NoticePaging
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={searchedNotice.length > 0 ? searchTotal : totalItemsCount}
          last4Important={searchedNotice.length > 0 ? 0 : lastImportant}
        />
      </PaginationContainer>
    </NoticeWrap>
  );
};

export default Notice;
