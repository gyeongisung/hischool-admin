import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getNoticeData } from "../api/notices";
import {
  NoticeDetailBoard,
  NoticeDetailButton,
  NoticeDetailITitle,
  NoticeDetailInformation,
  NoticeWrap,
} from "../styles/NoticeStyle";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotice() {
      try {
        const fetchedNotice = await getNoticeData(noticeId); // 공지사항 데이터 가져오기
        setNotice(fetchedNotice);
      } catch (error) {
        console.error("Error fetching notice:", error);
        setNotice(null);
      }
    }
    fetchNotice();
  }, [noticeId]);

  if (notice === null) {
    return <div>로딩 중...</div>;
  }

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }
  const handleCencle = () => {
    navigate(-1);
  };

  return (
    <NoticeWrap>
      <h3>공지사항</h3>
      <NoticeDetailITitle>
        <p>{notice.title}</p>
      </NoticeDetailITitle>
      <NoticeDetailInformation>
        <div>관리자</div>
        <div>
          <p>{notice.hits}</p>
          <p>{notice.createdAt.split("T", 1)}</p>
        </div>
      </NoticeDetailInformation>
      <NoticeDetailBoard
        dangerouslySetInnerHTML={{ __html: notice.content }}
      ></NoticeDetailBoard>
      <NoticeDetailButton>
        <Link to={`/noticedetail/${notice.noticeId}`}>
          <button type="submit">수정</button>
        </Link>
        <button onClick={handleCencle}>취소</button>
      </NoticeDetailButton>
    </NoticeWrap>
  );
};

export default NoticeDetail;
