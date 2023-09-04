import React, { useState, useEffect } from "react";
import {
  MypageDiv,
  TcButtons,
  TcMyPageUserInfo,
} from "../styles/TeacherInfoStyle";
import { getTcDetailData, putMyPageData } from "../api/TeacherInfoAxios";
import { TeacherAcceptModal } from "../components/Modal";
import { useLocation, useNavigate } from "react-router";
import { putSignAccept } from "../api/signListAxios";

const TeacherDetailInfo = () => {
  const [userData, setUserData] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const [detailAddress, setDetailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [selectFile, setSelectFile] = useState(null);
  const [acceptOk, setAcceptOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getTcDetailData(setUserData, state.userId);
  }, []);

  const objData = Object.keys(userData);

  const handleCancel = () => {
    navigate(-1);
  };

  // 이벤트 방지 함수
  const handleSubmit = e => {
    e.preventDefault();
  };

  // 회원정보 수정 함수
  const handlePatch = e => {
    e.preventDefault();
    e.persist();

    const userPdata = {
      phone: phone || userData.phone,
      address: houseAddress.address || userData.address,
      detailAddr: detailAddress || userData.detailAddr,
      pw: password || userData.pw,
    };

    let formData = new FormData();
    selectFile && formData.append("pic", selectFile);
    formData.append("p", JSON.stringify(userPdata));

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!password && !passwordConfirm) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    putMyPageData(formData);
    navigate("/home");
  };

  // Modal에 확인 버튼 클릭시 유저 삭제
  useEffect(() => {
    if (acceptOk === true) {
      setModalOpen(false);
      setAcceptOk(false);
      putSignAccept(state.userId);
      navigate("/teacherlist/signlist");
    }
  }, [acceptOk]);

  // 유저 삭제 모달 오픈 함수
  const handleSignModalOpen = () => {
    setModalOpen(true);
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
                        <select name="user-grade" value={userData.grade}>
                          <option value="1">1학년</option>
                          <option value="2">2학년</option>
                          <option value="3">3학년</option>
                          <option value="0">해당없음</option>
                        </select>
                        <select name="user-vannum" value={userData.vanNum}>
                          {objData.map((item, index) => (
                            <option key={index} value="1">
                              {item.vanNum}반
                            </option>
                          ))}
                          <option value="0">해당없음</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <label htmlFor="enroll-state">재직여부</label>
                    <select id="enroll-state">
                      <option value="">선택</option>
                      <option value="ENROLL">재직</option>
                      <option value="TRANSFER">전근</option>
                      <option value="LEAVE">퇴직</option>
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
