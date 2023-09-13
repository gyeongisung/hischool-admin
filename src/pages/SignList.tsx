import React, { useEffect, useState } from "react";
import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../styles/SignListStyle";
import { useNavigate } from "react-router";
import { getSignListData, putSignAccept } from "../api/signListAxios";
import { StudentAcceptModal } from "../components/Modal";
import Pagination from "../components/Paging";

export interface SignListData {
  userId: number;
  schoolNm: string;
  grade: string;
  vanNum: string;
  email: string;
  nm: string;
  birth: string;
  phone: string;
  address: string;
  detailAddr: string;
  role: string;
  aprYn: number;
  enrollState: string;
}

const SignList: React.FC = () => {
  const [listData, setListData] = useState<SignListData[]>([]);
  const [acceptOk, setAcceptOk] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [saveCheckBox, setSaveCheckBox] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  let resultIdArray: number[] = saveCheckBox;

  // 전체 체크박스 선택
  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allCheckBox =
      document.querySelectorAll<HTMLInputElement>(".school-checkbox");
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
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    getSignListData(page, setListData, setCount);
    if (acceptOk) {
      resultIdArray.forEach(item => putSignAccept(item));
    }
    setAcceptOk(false);
    setModalOpen(false);
  }, [page, acceptOk]);

  useEffect(() => {
    document.querySelector<HTMLInputElement>(".all-checkbox-btn")!.checked =
      false;
    document
      .querySelectorAll<HTMLInputElement>(".school-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, [listData]);

  const handleOk = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    navigate("/admin/teacherlist");
  };

  return (
    <StudentListWrap>
      {modalOpen && (
        <StudentAcceptModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setAcceptOk={setAcceptOk}
        />
      )}
      <StudentListTitle>
        <div>
          <h3>가입대기 명단</h3>
        </div>
        <div className="ListButtons">
          <button type="submit" onClick={handleOk}>
            승인
          </button>
          <button onClick={handleCancel}>취소</button>
        </div>
      </StudentListTitle>
      <TimeTableDiv>
        <ul>
          <li className="day-list">
            <ul>
              <li className="time-table-th">
                <input
                  type="checkbox"
                  name="all-check-box"
                  onChange={e => handleAllCheck(e)}
                  className="all-checkbox-btn"
                />
              </li>
              <li className="time-table-th">번호</li>
              <li className="time-table-th">이름</li>
              <li className="time-table-th">생년월일</li>
              <li className="time-table-th">연락처</li>
              <li className="time-table-th">이메일</li>
              <li className="time-table-th">소속</li>
            </ul>
          </li>
          {listData.length > 0 &&
            listData.map((item, index) => (
              <li className="class" key={index}>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="check-box"
                      defaultChecked={false}
                      className={`school-checkbox userId${item.userId}`}
                      onChange={e => handleCheckBox(e)}
                    />
                  </li>
                  <li>{(page - 1) * 16 + index + 1}</li>
                  <li
                    className="student-name"
                    onClick={() => {
                      navigate("/admin/teacherlist/detailinfo", {
                        state: { userId: item.userId, grade: item.grade },
                      });
                    }}
                  >
                    {item.nm}
                  </li>
                  <li>{item.birth}</li>
                  <li>{item.phone}</li>
                  <li>{item.email}</li>
                  <li>
                    {item.grade}학년 {item.vanNum}반
                  </li>
                </ul>
              </li>
            ))}
        </ul>
      </TimeTableDiv>
      <Pagination page={page} setPage={setPage} count={count} />
    </StudentListWrap>
  );
};

export default SignList;
