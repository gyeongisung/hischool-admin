import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  delectNoticeData,
  getNoticeData,
  patchNoticeHit,
} from "../../api/noticesAxios";
import {
  NoticeDetailBoard,
  NoticeDetailButton,
  NoticeDetailITitle,
  NoticeDetailInformation,
  NoticeWrap,
} from "../../styles/notice/NoticeStyle";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  console.log(noticeId);

  useEffect(() => {
    patchNoticeHit(noticeId);
    async function fetchNotice() {
      try {
        const fetchedNotice = await getNoticeData(noticeId);
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
  const handleDelect = () => {
    delectNoticeData(noticeId);
    navigate(-1);
  };

  const handleEditClick = () => {
    navigate(`/notice/editing/${noticeId}`, { state: { noticeId } });
  };

  return (
    <NoticeWrap>
      <h3>공지사항</h3>
      <NoticeDetailITitle>
        {notice.imptYn === 1 ? <span>중요</span> : ""}
        <p>{notice.title}</p>
      </NoticeDetailITitle>
      <NoticeDetailInformation>
        <div>관리자{notice.userId}</div>
        <div>
          <p>{notice.hits}</p>
          <p>{notice.createdAt.split("T", 1)}</p>
        </div>
      </NoticeDetailInformation>
      <NoticeDetailBoard
        dangerouslySetInnerHTML={{ __html: notice.content }}
      ></NoticeDetailBoard>
      <NoticeDetailButton>
        <button type="submit" onClick={handleEditClick}>
          수정
        </button>
        <button onClick={handleDelect}>삭제</button>
        <button onClick={handleCencle}>목록</button>
      </NoticeDetailButton>
    </NoticeWrap>
  );
};

export default NoticeDetail;
