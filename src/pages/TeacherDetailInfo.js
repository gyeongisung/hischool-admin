import React, { useState, useEffect } from "react";
import {
  MypageDiv,
  TcButtons,
  TcMyPageUserInfo,
} from "../styles/TeacherInfoStyle";
import {
  deleteUser,
  getTcDetailData,
  putMyPageData,
} from "../api/TeacherInfoAxios";
import { DeleteUserModal } from "../components/Modal";
import { useLocation, useNavigate } from "react-router";

const TeacherDetailInfo = () => {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const [detailAddress, setDetailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [addressModal, setAddressModal] = useState(false);
  const [codeConFirm, setCodeConFirm] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [userPic, setUserPic] = useState("");
  const [cancelOk, setCancelOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errPassword, setErrPassword] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  // get axios 담는 함수
  useEffect(() => {
    getTcDetailData(setUserData, state.userId);
  }, []);

  const handleChangeAddress = e => {
    setHouseAddress(e.target.value);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleChangeDetailAddr = e => {
    setDetailAddress(e.target.value);
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
    if (cancelOk === true) {
      setModalOpen(false);
      setCancelOk(false);
      deleteUser();
    }
  }, [cancelOk]);

  // 유저 삭제 모달 오픈 함수
  const handleDeleteModalOpen = () => {
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
                    <label>이메일</label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      readOnly
                    />
                  </li>
                  <li>
                    <label>이름</label>
                    <input
                      type="text"
                      name="tnm"
                      defaultValue={userData.nm}
                      readOnly
                    />
                  </li>
                  <li>
                    <label>생년월일</label>
                    <input
                      type="text"
                      name="birth"
                      defaultValue={userData.birth}
                      readOnly
                    />
                  </li>
                  <li>
                    <label>연락처</label>
                    <input
                      type="text"
                      name="phone"
                      defaultValue={userData.phone}
                      onChange={handleChangePhone}
                      readOnly
                    />
                  </li>
                  <li>
                    <label>주소</label>
                    <div className="address-wrap">
                      <div>
                        <input
                          className="user_enroll_text"
                          id="address-input"
                          type="text"
                          required={true}
                          name="address"
                          onChange={handleChangeAddress}
                          onClick={() => setAddressModal(true)}
                          value={userData.address}
                          readOnly
                        />
                      </div>
                      <input
                        type="text"
                        name="detailAddress"
                        className="detail-address"
                        defaultValue={userData.detailAddr}
                        placeholder="상세 주소를 입력하세요."
                        readOnly
                      />
                    </div>
                  </li>
                  <li>
                    <label>소속 학교</label>
                    <div>
                      <input
                        type="text"
                        name="snm"
                        defaultValue={userData.schoolNm}
                        readOnly
                      />
                      <div>
                        <select value={userData.grade}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="0">해당없음</option>
                        </select>
                        <select value={userData.vanNum}>
                          {/* {userData.map((item, index) => (
                            <option key={index} value="1">
                              {item.vanNum}
                            </option>
                          ))} */}
                          <option value="0">해당없음</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <label>재직여부</label>
                    <select>
                      <option value="">재직 여부</option>
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
              <DeleteUserModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                setCancelOk={setCancelOk}
              />
            )}
            <button className="withdraw-btn" onClick={handleDeleteModalOpen}>
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
