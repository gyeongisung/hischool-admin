import { SideMenuWrap } from "../styles/main/SideMenuStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faFileInvoice,
  faCalendarDays,
  faCommentDots,
  faLock,
  faSchool,
  faUserTie,
  faUserGraduate,
  faSquarePollVertical,
  faRightFromBracket,
  faCircleInfo,
  faHouseChimney,
  faUser,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { getUserInfo } from "../api/userInfoAxios";
import { useState } from "react";

const SideMenu = () => {
  const [userImg, setUserImg] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.pathname.split("/")[1];
  const cookies = new Cookies();

  const handleDeleteCookie = () => {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    getUserInfo(setUserImg, setUserName, setUserEmail);
  }, []);

  return (
    <SideMenuWrap>
      <div className="user-info-wrap">
        <div className="main-logo" onClick={() => navigate(`/${user}/home`)}>
          <span>Hi! School</span>
        </div>
        <div className="user-img" onClick={() => navigate(`/${user}/mypage`)}>
          <img src={userImg} alt="안녕" className="img-wrap" />
        </div>
        <p>
          <span className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <ins onClick={() => navigate(`/${user}/mypage`)}>
            <span className="user-name">관리자</span>
          </ins>
          <span>님</span>
          <br />
          <ins onClick={() => navigate(`/${user}/mypage`)}>
            <span className="user-email">{`(${userEmail})`}</span>
          </ins>
          <br />
          <span>반갑습니다!</span>
        </p>
      </div>
      <div className="gnb-wrap">
        <div className="gnb">
          <ul>
            <NavLink
              to={`/home`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faHouseChimney} className="icon" />
                <span>홈</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to={`/notice`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faCommentDots} className="icon" />
                <span>공지사항</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to={`/subjectlist`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faBook} className="icon" />
                <span>과목 관리</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to={`/recordlist`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faSquarePollVertical} className="icon" />
                <span>성적 관리</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to={`/teacherlist`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faUserTie} className="icon" />
                <span>교원 관리</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to={`/studentlist`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faUserGraduate} className="icon" />
                <span>학생 관리</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>{" "}
            <NavLink
              to={`classlist`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faSchool} className="icon-school" />
                <span>학급 관리</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="footer">
          <Link className="btn-logout">
            <FontAwesomeIcon icon={faRightFromBracket} className="logout" />
            <span onClick={handleDeleteCookie}> 로그아웃</span>
          </Link>
        </div>
      </div>
    </SideMenuWrap>
  );
};
export default SideMenu;
