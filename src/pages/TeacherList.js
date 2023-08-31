import React, { useEffect, useState } from "react";
import {
  TeacherListDiv,
  TeacherListTitle,
  TeacherListWrap,
} from "../styles/TeacherListStyle";
import { useNavigate } from "react-router";
import { getTeacherList } from "../api/TeacherListAxios";
import Paging from "../components/Paging";

const TeacherList = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState("");
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTeacherList(page, setListData, setCount);
  }, [page]);

  const handleSginClick = () => {
    navigate("/teacherlist/signlist");
  };

  return (
    <TeacherListWrap>
      <TeacherListTitle>
        <div className="title-left">
          <h3>교원관리</h3>
          <button onClick={handleSginClick}>승인대기 명단</button>
        </div>
        <div className="title-right">
          <div>
            <select>
              <option value="">재직 여부</option>
              <option value="ENROLL">재직</option>
              <option value="TRANSFER">전근</option>
              <option value="LEAVE">퇴직</option>
            </select>
          </div>
          <div>
            <form>
              <input type="text" placeholder="이름을 입력하세요." />
              <button>검색</button>
            </form>
          </div>
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
                  <li
                    className="student-name"
                    onClick={() => {
                      navigate("/teacherlist/detailinfo", {
                        state: { userId: item.userId },
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
                  {item.enrollState === "ENROLL" && <li>재직</li>}
                  {item.enrollState === "TRANSFER" && <li>전근</li>}
                  {item.enrollState === "LEAVE" && <li>퇴직</li>}
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
