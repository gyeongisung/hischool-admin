import React, { useEffect, useState } from "react";
import {
  StudentListWrap,
  StudentListDiv,
  StudentListHeader,
} from "../styles/StudentListStyle";
import Pagination from "react-js-pagination";
import { EditAttendModal, EditClassModal } from "../components/Modal";
import { getStudentData } from "../api/studentListAxios";
const StudentList = () => {
  const [page, setPage] = useState(1);
  const [totlaPage, setTotalPage] = useState(1);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [editClassModalOpen, setEditClassModalOpen] = useState(false);
  const [editAttendModalOpen, setEditAttendModalOpen] = useState(false);
  const [studentListData, setStudentListData] = useState("");

  // 전체 체크박스 선택
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".checkbox");
    let userIdList = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        userIdList.push(parseInt(item.classList[1].slice(6)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      userIdList = [];
    }
    setSaveCheckBox(userIdList);
  };

  // 개별 체크박스 선택
  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const userId = parseInt(clickList.classList[1].slice(6));
    let userIdList;
    if (e.target.checked === true) {
      setSaveCheckBox([...saveCheckBox, userId]);
    } else {
      userIdList = saveCheckBox.filter(item => item !== userId);
      setSaveCheckBox(userIdList);
    }
  };

  const handleEditClass = () => {
    setEditClassModalOpen(true);
  };

  const handleEditAttend = () => {
    setEditAttendModalOpen(true);
  };

  useEffect(() => {
    getStudentData(page, setStudentListData, setTotalPage);
  }, [page, studentListData]);

  return (
    <>
      {editClassModalOpen && (
        <EditClassModal
          editClassModalOpen={editClassModalOpen}
          setEditClassModalOpen={setEditClassModalOpen}
        />
      )}
      {editAttendModalOpen && (
        <EditAttendModal
          saveCheckBox={saveCheckBox}
          editAttendModalOpen={editAttendModalOpen}
          setEditAttendModalOpen={setEditAttendModalOpen}
          setSaveCheckBox={setSaveCheckBox}
        />
      )}
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
                <option>1학년</option>
                <option>2학년</option>
                <option>3학년</option>
              </select>
              <select
                name="classNum"
                id="classNum"
                // onChange={e => handleYearList(e)}
              >
                <option value="">반</option>
                <option>1반</option>
                <option>2반</option>
                <option>3반</option>
                <option>4반</option>
                <option>5반</option>
              </select>
              <select
                name="attend"
                id="attend"
                // onChange={e => handleYearList(e)}
              >
                <option value="">학적 구분</option>
                <option>재학</option>
                <option>졸업</option>
                <option>자퇴</option>
                <option>전학</option>
              </select>
            </div>
            <div className="btn-wrap">
              <button className="edit-class" onClick={handleEditClass}>
                학반 정보 변경
              </button>
              <button className="edit-attend" onClick={handleEditAttend}>
                학적 구분 변경
              </button>
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
                <li className="time-table-th">학적 구분</li>
              </ul>
            </li>
            {studentListData.length > 0 &&
              studentListData.map((item, index) => (
                <li className="class" key={index}>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        className={`checkbox userId${item.userId}`}
                        onClick={e => handleCheckBox(e)}
                      />
                    </li>
                    <li>{item.nm}</li>
                    <li>{"0000-00-00"}</li>
                    <li>{item.grade}</li>
                    <li>{item.classNum}</li>
                    <li>{item.phone}</li>
                    <li>{item.email}</li>
                    {item.enrollState === "ENROLL" && <li>재학</li>}
                    {item.enrollState === "GRADUATION" && <li>졸업</li>}
                    {item.enrollState === "LEAVE" && <li>자퇴</li>}
                    {item.enrollState === "TRANSFER" && <li>전학</li>}
                  </ul>
                </li>
              ))}
          </ul>
        </StudentListDiv>
        <div className="pagination-wrap">
          <Pagination
            activePage={page}
            itemsCountPerPage={17}
            totalItemsCount={totlaPage}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={setPage}
          />
        </div>
      </StudentListWrap>
    </>
  );
};

export default StudentList;
