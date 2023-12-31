import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { HomeNoticeWrap } from "../../styles/AdminHomeStyle";
import { getMainNoticeList } from "../../api/adminHomeAxios";

export interface NoticeType {
  imptList: [
    {
      noticeId: number;
      imptYn: number;
      title: string;
      createdAt: string;
      hits: number;
    },
  ];
  normalList: [
    {
      noticeId: number;
      imptYn: number;
      title: string;
      createdAt: string;
      hits: number;
    },
  ];
}

const HomeNotice = () => {
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState<NoticeType>({
    imptList: [
      {
        noticeId: 0,
        imptYn: 0,
        title: "",
        createdAt: "",
        hits: 0,
      },
    ],
    normalList: [
      {
        noticeId: 0,
        imptYn: 0,
        title: "",
        createdAt: ",",
        hits: 0,
      },
    ],
  });

  // 공지사항 개수 제한
  const maxVisibleLists = 13;
  const importantListCount = noticeList.imptList?.length;
  const normalListViewCount = maxVisibleLists - importantListCount;

  useEffect(() => {
    getMainNoticeList(setNoticeList);
  }, []);

  return (
    <HomeNoticeWrap>
      <Link to="/notice" className="notice-wrap-title">
        <h3>
          공지사항
          <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
        </h3>
      </Link>
      <div className="notice-wrap">
        <ul className="notice-title-wrap">
          <li className="table-numer">번호</li>
          <li className="table-title">제목</li>
          <li className="table-creationdate">등록일</li>
          <li className="table-views">조회수</li>
        </ul>
        <div className="notice-list-wrap">
          {noticeList.imptList?.length > 0 &&
            noticeList.imptList.map(item => (
              <ul className="important-notice" key={item.noticeId}>
                <li>
                  <span>중요</span>
                </li>
                <li>
                  <Link to={`/notice/${item.noticeId}`}>{item.title}</Link>
                </li>
                <li>{item.createdAt}</li>
                <li>{item.hits}</li>
              </ul>
            ))}
          {noticeList.normalList?.length > 0 &&
            noticeList.normalList.slice(0, normalListViewCount).map(item => (
              <ul key={item.noticeId}>
                <li>{item.noticeId}</li>
                <li className="list-title">
                  <Link to={`/notice/${item.noticeId}`}>{item.title}</Link>
                </li>
                <li>{item.createdAt}</li>
                <li>{item.hits}</li>
              </ul>
            ))}
        </div>
      </div>
    </HomeNoticeWrap>
  );
};

export default HomeNotice;
