import React, { useEffect, useState } from "react";
import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../styles/TeacherListStyle";
import { useNavigate } from "react-router";
import Pagination from "../components/Paging";
import { Link } from "react-router-dom";
// import { getStudentData, patchSignCancel } from "../api/studentListAxios";
// import { TeacherAcceptModal } from "../components/Modal";
// import { getSignListData, patchSignAccept } from "../api/signListAxios";

const liedata = [
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
  {
    snm: "안녕",
    birth: "1991-09-07",
    phone: "010-2315-2398",
    email: "lovelove@gmail.com",
    adress: "우리집이 어딘지 잘 모르겠어요",
    belong: "3학년 2반",
    employ: "재직",
  },
];

const TeacherList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const [acceptOk, setAcceptOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  // const handleOk = () => {
  //   setModalOpen(true);
  // };

  const handleSginClick = () => {
    navigate("/signlist");
  };

  const handleNameClick = () => {
    navigate("/teacherdetailinfo");
  };

  return (
    <StudentListWrap>
      {/* {modalOpen && (
        <TeacherAcceptModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          resultIdArray={resultIdArray}
          setAcceptOk={setAcceptOk}
        />
      )} */}
      <StudentListTitle>
        <div>
          <h3>교원관리</h3>
        </div>
        <div>
          <button onClick={handleSginClick}>가입대기 명단</button>
        </div>
      </StudentListTitle>
      <TimeTableDiv>
        <ul className="list-title">
          <li className="list-title-th">번호</li>
          <li className="list-title-th">이름</li>
          <li className="list-title-th">생년월일</li>
          <li className="list-title-th">연락처</li>
          <li className="list-title-th">이메일</li>
          <li className="list-title-th">주소</li>
          <li className="list-title-th">소속</li>
          <li className="list-title-th">재직여부</li>
        </ul>
        <ul className="data-list">
          {liedata?.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>{index + 1}</li>
                <li>
                  <Link to={"/teacherdetailinfo"}>{item.snm}</Link>
                </li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
                <li>{item.adress}</li>
                <li>{item.belong}</li>
                <li>{item.employ}</li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
      <Pagination page={page} setPage={setPage} />
    </StudentListWrap>
  );
};

export default TeacherList;
