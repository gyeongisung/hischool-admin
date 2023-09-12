import { SideMenuWrap } from "../styles/main/SideMenuStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCommentDots,
  faUserTie,
  faUserGraduate,
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
  const cookies = new Cookies();

  const handleDeleteCookie = () => {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  useEffect(() => {
    getUserInfo(setUserImg, setUserName, setUserEmail);
  }, []);

  return (
    <SideMenuWrap>
      <div className="user-info-wrap">
        <div className="main-logo" onClick={() => navigate(`/home`)}>
          <span>Hi! School</span>
        </div>
        <div className="user-img">
          <img src={userImg} alt="안녕" className="img-wrap" />
        </div>
        <p>
          <span className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="user-name">관리자</span>
          <span>님</span>
          <br />
          <span className="user-email">{`(${userEmail})`}</span>
          <br />
          <span>반갑습니다!</span>
        </p>
      </div>
      <div className="gnb-wrap">
        <div className="gnb">
          <ul>
            <NavLink
              to={`/admin/home`}
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
              to={`/admin/notice`}
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
              to={`/admin/subjectlist`}
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
              to={`/admin/teacherlist`}
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
              to={`/admin/studentlist`}
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
              to={`/admin/about`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                <span>Hi School ?</span>
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
