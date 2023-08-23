import React, { useEffect, useState } from "react";
import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../styles/StudentListStyle";
import { useNavigate } from "react-router";
// import { getStudentData, patchSignCancel } from "../api/studentListAxios";
import { TeacherAcceptModal } from "../components/Modal";
import { getSignListData, patchSignAccept } from "../api/signListAxios";

const TeacherList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const [acceptOk, setAcceptOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const [userPk, setUserPk] = useState(null);
  const [saveCheckBox, setSaveCheckBox] = useState([]);

  const navigate = useNavigate();

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

  // Modal 확인 클릭 시
  useEffect(() => {
    getSignListData(setStudentListData);
    if (acceptOk) {
      resultIdArray.forEach(item => patchSignAccept(item));
    }
    setAcceptOk(false);
    setModalOpen(false);
  }, [acceptOk]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".school-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, [studentListData]);

  const handleOk = () => {
    setModalOpen(true);
  };

  const handleSginClick = () => {
    navigate("/signlist");
  };

  return (
    <StudentListWrap>
      {modalOpen && (
        <TeacherAcceptModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          resultIdArray={resultIdArray}
          setAcceptOk={setAcceptOk}
        />
      )}
      <StudentListTitle>
        <div>
          <h3>학생관리</h3>
        </div>
        <div>
          <button onClick={handleSginClick}>가입대기 명단</button>
          <button type="submit" onClick={handleOk}>
            승인
          </button>
        </div>
      </StudentListTitle>
      <TimeTableDiv>
        <ul className="list-title">
          <li className="time-table-th">
            <input
              type="checkbox"
              onClick={e => handleAllCheck(e)}
              className="all-checkbox-btn"
            />
          </li>
          <li className="list-title-th">번호</li>
          <li className="list-title-th">이름</li>
          <li className="list-title-th">생년월일</li>
          <li className="list-title-th">연락처</li>
          <li className="list-title-th">이메일</li>
          <li className="list-title-th">주소</li>
          <li className="list-title-th">소속</li>
        </ul>
        <ul className="data-list">
          {studentListData?.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className={`school-checkbox userId${item.userId}`}
                    onClick={e => handleCheckBox(e)}
                  />
                </li>
                <li>{index + 1}</li>
                <li>{item.snm}</li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
    </StudentListWrap>
  );
};

export default TeacherList;
