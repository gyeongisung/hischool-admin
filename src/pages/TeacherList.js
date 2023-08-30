import React, { useEffect, useState } from "react";
import {
  TeacherListDiv,
  TeacherListTitle,
  TeacherListWrap,
} from "../styles/TeacherListStyle";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getTeacherList } from "../api/TeacherListAxios";
import Paging from "../components/Paging";

const TeacherList = () => {
  // const [studentListData, setStudentListData] = useState([]);
  // const [acceptOk, setAcceptOk] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState("");
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  console.log(count);

  useEffect(() => {
    getTeacherList(page, setListData, setCount);
  }, [page]);

  // const handleOk = () => {
  //   setModalOpen(true);
  // };

  const handleSginClick = () => {
    navigate("/signlist");
  };

  return (
    <TeacherListWrap>
      {/* {modalOpen && (
        <TeacherAcceptModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          resultIdArray={resultIdArray}
          setAcceptOk={setAcceptOk}
        />
      )} */}
      <TeacherListTitle>
        <div>
          <h3>교원관리</h3>
        </div>
        <div>
          <button onClick={handleSginClick}>가입대기 명단</button>
        </div>
      </TeacherListTitle>
      <TeacherListDiv>
        <ul className="list-title">
          <li className="list-title-th">번호</li>
          <li className="list-title-th">이름</li>
          <li className="list-title-th">생년월일</li>
          <li className="list-title-th">연락처</li>
          <li className="list-title-th">이메일</li>
          <li className="list-title-th">소속</li>
          <li className="list-title-th">재직여부</li>
        </ul>
        <ul className="data-list">
          {listData.length > 0 &&
            listData.map((item, index) => (
              <li className="class" key={index}>
                <ul>
                  <li>{index + 1}</li>
                  <li>
                    <Link to={"/teacherdetailinfo"}>{item.nm}</Link>
                  </li>
                  <li>{item.birth}</li>
                  <li>{item.phone}</li>
                  <li>{item.email}</li>
                  <li>
                    {item.grade}학년 {item.vanNum}반
                  </li>
                  {item.enrollState === "ENROLL" && <li>재직</li>}
                  {item.enrollState === "LEAVE" && <li>탈퇴</li>}
                  {item.enrollState === "TRANSFER" && <li>전근</li>}
                </ul>
              </li>
            ))}
        </ul>
      </TeacherListDiv>
      <div className="pagiWrap">
        <Paging page={page} setPage={setPage} count={count} />
      </div>
    </TeacherListWrap>
  );
};

export default TeacherList;
