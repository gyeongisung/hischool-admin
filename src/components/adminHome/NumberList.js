import React from "react";
import { NumberListWrap } from "../../styles/AdminHomeStyle";

const NumberList = () => {
  return (
    <NumberListWrap>
      <h3>교내 비상연락망</h3>
      <div className="number-list-top">
        <div className="main-number-list">
          <ul>
            <li>
              <ul>
                <li>행정실</li>
                <li>053-000-0000</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>교무실</li>
                <li>053-000-0000</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>교장실</li>
                <li>053-000-0000</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <ul>
                <li>관리실</li>
                <li>053-000-0000</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>기계실</li>
                <li>053-000-0000</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Fax</li>
                <li>053-000-0000</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="number-list-bottom">
        <ul>
          <li className="grade-main-teacher">
            <ul>
              <li>학년부장</li>
              <li>교원명</li>
              <li>담당학급</li>
              <li>내선번호</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>1학년</li>
              <li>김철수</li>
              <li>1학년 5반</li>
              <li>1170</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2학년</li>
              <li>이유리</li>
              <li>2학년 1반</li>
              <li>2010</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>3학년</li>
              <li>김성오</li>
              <li>3학년 2반</li>
              <li>3110</li>
            </ul>
          </li>
        </ul>
      </div>
    </NumberListWrap>
  );
};

export default NumberList;
