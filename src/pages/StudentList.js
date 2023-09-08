import React, { useEffect, useState } from "react";
import {
  StudentListWrap,
  StudentListDiv,
  StudentListHeader,
} from "../styles/StudentListStyle";
import Pagination from "react-js-pagination";
import {
  EditAttendModal,
  EditClassModal,
  EditErrorModal,
} from "../components/Modal";
import { getClassInfo, getStudentData } from "../api/studentListAxios";
const StudentList = () => {
  const [page, setPage] = useState(1);
  const [totlaPage, setTotalPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [handleOk, setHandleOk] = useState(false);
  const [editErrModalOpen, setEditErrModalOpen] = useState(false);
  const [editClassModalOpen, setEditClassModalOpen] = useState(false);
  const [editAttendModalOpen, setEditAttendModalOpen] = useState(false);
  const [studentListData, setStudentListData] = useState("");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [seletedClass, setSelectedClass] = useState("");
  const [enroll, setEnroll] = useState("");

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

  // 학반 정보 변경
  const handleEditClass = () => {
    if (saveCheckBox.length > 0) {
      setEditClassModalOpen(true);
    } else {
      setEditErrModalOpen(true);
    }
  };

  // 학적 구분 변경
  const handleEditAttend = () => {
    if (saveCheckBox.length > 0) {
      setEditAttendModalOpen(true);
    } else {
      setEditErrModalOpen(true);
    }
  };

  // 검색 버튼 클릭
  const handleSearchBtn = e => {
    e.preventDefault();
    setPage(1);
    getStudentData(
      page,
      grade,
      seletedClass,
      enroll,
      searchText,
      setStudentListData,
      setTotalPage,
    );
  };

  const handleGrade = e => {
    setGrade(e.target.value);
    setPage(1);
  };

  const handleClass = e => {
    setSelectedClass(e.target.value);
    setPage(1);
  };

  const handleEnroll = e => {
    setEnroll(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    if (grade) {
      getClassInfo(grade, setClassNum);
      getStudentData(
        page,
        grade,
        seletedClass,
        enroll,
        searchText,
        setStudentListData,
        setTotalPage,
      );
    } else if (!grade) {
      setClassNum("");
      setSelectedClass("");
      if (grade === "" && seletedClass === "") {
        getStudentData(
          page,
          grade,
          seletedClass,
          enroll,
          searchText,
          setStudentListData,
          setTotalPage,
        );
      }
    }

    setHandleOk(false);
  }, [page, grade, seletedClass, enroll, handleOk]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    const allCheckBox = document.querySelectorAll(".checkbox");
    allCheckBox.forEach(item => {
      item.checked = false;
    });
  }, [studentListData]);

  return (
    <>
      {editErrModalOpen && (
        <EditErrorModal setEditErrModalOpen={setEditErrModalOpen} />
      )}
      {editClassModalOpen && (
        <EditClassModal
          saveCheckBox={saveCheckBox}
          editClassModalOpen={editClassModalOpen}
          setEditClassModalOpen={setEditClassModalOpen}
          setHandleOk={setHandleOk}
        />
      )}
      {editAttendModalOpen && (
        <EditAttendModal
          saveCheckBox={saveCheckBox}
          editAttendModalOpen={editAttendModalOpen}
          setEditAttendModalOpen={setEditAttendModalOpen}
          setSaveCheckBox={setSaveCheckBox}
          setHandleOk={setHandleOk}
        />
      )}
      <StudentListWrap>
        <h3>학생 관리</h3>
        <StudentListHeader>
          <div className="search-wrap">
            <form>
              <input
                type="text"
                name="search-bar"
                placeholder="학생 이름을 입력하세요."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <button onClick={handleSearchBtn}>검색</button>
            </form>
          </div>
          <div className="right-wrap">
            <div className="filter-wrap">
              <select
                name="grade"
                id="grade"
                value={grade}
                onChange={e => handleGrade(e)}
              >
                <option value="">학년</option>
                <option value="1">1학년</option>
                <option value="2">2학년</option>
                <option value="3">3학년</option>
              </select>
              <select
                name="classNum"
                id="classNum"
                onChange={e => handleClass(e)}
              >
                <option value="">반</option>
                {classNum &&
                  classNum.map(item => (
                    <option key={item} value={item}>
                      {item}반
                    </option>
                  ))}
              </select>
              <select name="attend" id="attend" onChange={e => handleEnroll(e)}>
                <option value="">학적 구분</option>
                <option value="ENROLL">재학</option>
                <option value="GRADUATION">졸업</option>
                <option value="LEAVE">자퇴</option>
                <option value="TRANSFER">전학</option>
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
                    name="all-check-box"
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
            {studentListData.length > 0 ? (
              studentListData.map((item, index) => (
                <li className="class" key={index}>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        name="check-box"
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
              ))
            ) : (
              <div className="list-err-msg">조회된 학생이 없습니다.</div>
            )}
          </ul>
        </StudentListDiv>
        {totlaPage !== 0 && (
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
        )}
      </StudentListWrap>
    </>
  );
};

export default StudentList;
