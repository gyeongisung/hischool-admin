import React, { useState, useEffect } from "react";
import {
  MypageDiv,
  TcButtons,
  TcMyPageUserInfo,
} from "../styles/TeacherInfoStyle";
import {
  getTcDetailData,
  getTeacherGrade,
  patchMyPageData,
} from "../api/TeacherInfoAxios";
import { TeacherAcceptModal } from "../components/Modal";
import { useLocation, useNavigate } from "react-router";
import { putSignAccept } from "../api/signListAxios";

const TeacherDetailInfo = () => {
  const { state } = useLocation();
  const defaultGrade = state && state.grade;
  const [userData, setUserData] = useState([]);
  const [acceptOk, setAcceptOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [enrollFilter, setEnrollFilter] = useState("");
  const [vanNum, setVanNum] = useState("");
  const [gradeList, setGradeList] = useState([]);
  const [grade, setGrade] = useState(defaultGrade);
  const navigate = useNavigate();

  useEffect(() => {
    getTcDetailData(setUserData, state.userId, setVanNum, setEnrollFilter);
    getTeacherGrade(grade, setGradeList);
  }, [grade]);

  const handleCancel = () => {
    navigate(-1);
  };

  // 이벤트 방지 함수
  const handleSubmit = e => {
    e.preventDefault();
  };

  // 교원 정보 수정 함수
  const handlePatch = () => {
    if (enrollFilter !== "") {
      patchMyPageData(state.userId, enrollFilter, grade, vanNum);
      navigate(-1);
    } else {
      alert("재직여부를 선택해주세요.");
    }
  };

  // Modal 확인 버튼 클릭시 교원 승인
  useEffect(() => {
    if (acceptOk === true) {
      setModalOpen(false);
      setAcceptOk(false);
      putSignAccept(state.userId);
      navigate("/admin/teacherlist/signlist");
    }
  }, [acceptOk]);

  // 교원 승인 모달 오픈 함수
  const handleSignModalOpen = () => {
    setModalOpen(true);
  };

  const handleGrade = e => {
    setGrade(parseInt(e.target.value));
  };

  const handleVanNum = e => {
    setVanNum(parseInt(e.target.value));
  };

  const handleFilter = e => {
    setEnrollFilter(e.target.value);
  };

  return (
    <MypageDiv onSubmit={handleSubmit}>
      <div>
        <div className="mypage-top">
          <div className="user-info">
            <div className="user-info-wrap">
              <div className="picture-img">
                <img src={userData.aprPic} alt="pic" />
              </div>
              <div className="school-info">
                <TcMyPageUserInfo>
                  <li>
                    <label htmlFor="teacher-email">이메일</label>
                    <input
                      type="email"
                      id="teacher-email"
                      defaultValue={userData.email}
                      readOnly
                    />
                  </li>
                  <li>
                    <label htmlFor="teacher-name">이름</label>
                    <input
                      type="text"
                      id="teacher-name"
                      defaultValue={userData.nm}
                      readOnly
                    />
                  </li>
                  <li>
                    <label htmlFor="teacher-birth">생년월일</label>
                    <input
                      type="text"
                      id="teacher-birth"
                      defaultValue={userData.birth}
                      readOnly
                    />
                  </li>
                  <li>
                    <label htmlFor="teacher-phone">연락처</label>
                    <input
                      type="text"
                      id="teacher-phone"
                      defaultValue={userData.phone}
                      readOnly
                    />
                  </li>
                  <li>
                    <label htmlFor="address-input">주소</label>
                    <div className="address-wrap">
                      <div>
                        <input
                          className="user_enroll_text"
                          id="address-input"
                          type="text"
                          required={true}
                          defaultValue={userData.address}
                          readOnly
                        />
                      </div>
                      <input
                        type="text"
                        name="adress-detail"
                        className="detail-address"
                        defaultValue={userData.detailAddr}
                        placeholder="상세 주소를 입력하세요."
                        readOnly
                      />
                    </div>
                  </li>
                  <li>
                    <label htmlFor="teacher-snm">소속 학교</label>
                    <div>
                      <input
                        type="text"
                        id="teacher-snm"
                        defaultValue={userData.schoolNm}
                        readOnly
                      />
                      <div>
                        <select
                          name="user-grade"
                          value={grade}
                          onChange={e => handleGrade(e)}
                        >
                          <option value="1">1학년</option>
                          <option value="2">2학년</option>
                          <option value="3">3학년</option>
                          <option value="0">해당없음</option>
                        </select>
                        <select
                          name="user-vannum"
                          value={vanNum}
                          onChange={e => handleVanNum(e)}
                        >
                          {gradeList && gradeList[0] == 0 ? (
                            <option value="0">해당없음</option>
                          ) : (
                            gradeList.map(item => (
                              <option key={item} value={item}>
                                {item}반
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <label htmlFor="enroll-state">재직여부</label>
                    <select
                      id="enroll-state"
                      value={enrollFilter}
                      onChange={e => handleFilter(e)}
                    >
                      <option value="">선택</option>
                      <option value="ENROLL">재직</option>
                      <option value="TRANSFER">전근</option>
                      <option value="LEAVE">휴직</option>
                      <option value="GRADUATION ">퇴직</option>
                    </select>
                  </li>
                </TcMyPageUserInfo>
              </div>
            </div>
          </div>
        </div>
        <div className="mypage-bottom">
          <TcButtons>
            {modalOpen && (
              <TeacherAcceptModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                setAcceptOk={setAcceptOk}
              />
            )}
            <button className="withdraw-btn" onClick={handleSignModalOpen}>
              승인
            </button>
            <div>
              <button type="submit" onClick={handlePatch}>
                수정
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                취소
              </button>
            </div>
          </TcButtons>
        </div>
      </div>
    </MypageDiv>
  );
};

export default TeacherDetailInfo;
