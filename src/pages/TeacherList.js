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
  const [count, setCount] = useState(0);
  const [listData, setListData] = useState([]);
  const [search, setSearch] = useState("");
  const [enrollFilter, setEnrollFilter] = useState("");
  const [transfer, setTransfer] = useState("");
  const [leave, setLeave] = useState("");
  const navigate = useNavigate();

  const fetchData = () => {
    getTeacherList(page, setListData, setCount, search);
  };
  useEffect(() => {
    fetchData();
  }, [page, search]);

  const handleSginClick = () => {
    navigate("/teacherlist/signlist");
  };

  const handleSearchClick = e => {
    e.preventDefault();
    fetchData();
  };

  // const handleFilter = () => {
  //   if (enrollFilter === "") {
  //     return listData;
  //   } else {
  //     return listData
  //       .filter(item => item.enrollState === enrollFilter)
  //       .map((item, index) => {
  //         const pageNumber = page;
  //         const perPage = 16;
  //         const itemNumber = (pageNumber - 1) * perPage + index + 1;
  //         return { ...item, itemNumber };
  //       });
  //   }
  // };
  // console.log(listData);

  return (
    <TeacherListWrap>
      <TeacherListTitle>
        <div className="title-left">
          <h3>교원관리</h3>
          <button onClick={handleSginClick}>승인대기 명단</button>
        </div>
        <div className="title-right">
          <div>
            <select
              value={enrollFilter}
              name="enroll-state"
              onChange={e => {
                setEnrollFilter(e.target.value);
              }}
            >
              <option name="enroll-state" value="">
                재직 여부
              </option>
              <option name="enroll-state" value="ENROLL">
                재직
              </option>
              <option name="enroll-state" value="TRANSFER">
                전근
              </option>
              <option name="enroll-state" value="LEAVE">
                퇴직
              </option>
            </select>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                name="enroll-state"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button onClick={handleSearchClick}>검색</button>
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
              <li className="class" key={item.userId}>
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
                  {item.enrollState === "LEAVE" && <li>휴직</li>}
                  {item.enrollState === "GRADUATION" && <li>퇴직</li>}
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
