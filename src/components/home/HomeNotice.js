import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { HomeNoticeWrap } from "../../styles/AdminHomeStyle";

const HomeNotice = () => {
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
          <ul className="important-notice">
            <li>
              <span>중요</span>
            </li>
            <li>
              2학기 학생·학부모 상담주간 안내(2023.08.23.(수)~2023.08.29.(화))
            </li>
            <li>2023-08-22</li>
            <li>108</li>
          </ul>
          <ul className="important-notice">
            <li>
              <span>중요</span>
            </li>
            <li>성적입력기간 및 성적확인기간 안내</li>
            <li>2023-08-21</li>
            <li>210</li>
          </ul>
          <ul className="important-notice">
            <li>
              <span>중요</span>
            </li>
            <li>8월 시스템 점검 안내(2023.08.24.(목))</li>
            <li>2023-08-21</li>
            <li>90</li>
          </ul>
          <ul>
            <li>156</li>
            <li>2학기 개학 안내</li>
            <li>2023-08-08</li>
            <li>132</li>
          </ul>
          <ul>
            <li>155</li>
            <li>여름방학기간 안내</li>
            <li>2023-07-17</li>
            <li>156</li>
          </ul>
          <ul>
            <li>154</li>
            <li>기말고사기간 안내</li>
            <li>2023-07-01</li>
            <li>241</li>
          </ul>
          <ul>
            <li>153</li>
            <li>
              1학기 학생·학부모 상담주간 안내(2023.06.12.(월)~2023.06.16.(금))
            </li>
            <li>2023-06-08</li>
            <li>132</li>
          </ul>
          <ul>
            <li>152</li>
            <li>재량휴업일 안내(2023. 06. 05.(월))</li>
            <li>2023-06-01</li>
            <li>132</li>
          </ul>
        </div>
      </div>
    </HomeNoticeWrap>
  );
};

export default HomeNotice;
