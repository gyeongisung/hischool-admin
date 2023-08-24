import React, { useState } from "react";
import {
  StudentListWrap,
  StudentListDiv,
  StudentListHeader,
} from "../styles/StudentListStyle";
import Pagination from "react-js-pagination";
const StudentList = () => {
  const [page, setPage] = useState(1);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  let resultIdArray = saveCheckBox;

  // 전체 체크박스 선택
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".school-checkbox");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(6)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setSaveCheckBox(resultIdArray);
  };

  // 개별 체크박스 선택
  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const userId = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(userId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== userId);
    }
    setSaveCheckBox(resultIdArray);
  };

  const example = [
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
    {
      snm: "김길동",
      birth: "2005-12-12",
      grade: 3,
      classNum: 2,
      phone: "010-1234-1234",
      email: "class1@naver.com",
      attend: "재학",
    },
  ];

  return (
    <StudentListWrap>
      <h3>학생 관리</h3>
      <StudentListHeader>
        <div className="search-wrap">
          <form action="">
            <input type="text" placeholder="학생 이름을 입력하세요." />
            <button>검색</button>
          </form>
        </div>
        <div className="right-wrap">
          <div className="filter-wrap">
            <select
              name="grade"
              id="grade"
              // onChange={e => handleYearList(e)}
            >
              <option value="">학년</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select
              name="classNum"
              id="classNum"
              // onChange={e => handleYearList(e)}
            >
              <option value="">반</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <select
              name="attend"
              id="attend"
              // onChange={e => handleYearList(e)}
            >
              <option value="">재학여부</option>
              <option>재학</option>
              <option>졸업</option>
              <option>자퇴</option>
              <option>전학</option>
            </select>
          </div>
          <div className="btn-wrap">
            <button className="edit-class">학반 정보 변경</button>
            <button className="edit-attend">재학 여부 변경</button>
          </div>
        </div>
      </StudentListHeader>
      <StudentListDiv>
        <ul>
          <li className="day-list">
            <ul>
              <li className="time-table-th">
                <input
                  type="checkbox"
                  onClick={e => handleAllCheck(e)}
                  className="all-checkbox-btn"
                />
              </li>
              <li className="time-table-th">이름</li>
              <li className="time-table-th">생년월일</li>
              <li className="time-table-th">학년</li>
              <li className="time-table-th">반</li>
              <li className="time-table-th">연락처</li>
              <li className="time-table-th">이메일</li>
              <li className="time-table-th">재학여부</li>
            </ul>
          </li>
          {example.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className={`school-checkbox userId${1}`}
                    onClick={e => handleCheckBox(e)}
                  />
                </li>
                <li>{item.snm}</li>
                <li>{item.birth}</li>
                <li>{item.grade}</li>
                <li>{item.classNum}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
                <li>{item.attend}</li>
              </ul>
            </li>
          ))}
        </ul>
      </StudentListDiv>
      <div className="pagination-wrap">
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={setPage}
        />
      </div>
    </StudentListWrap>
  );
};

export default StudentList;
