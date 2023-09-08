import {
  ModalContain,
  ModalBody,
  ModalCloseBtn,
  StudentRecordModalDiv,
  EditClassModalDiv,
  EditAttendModalDiv,
  EditErrorModalStyle,
} from "../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { postEmailCodeConFirm } from "../api/signUpAxios";
import { useEffect, useState } from "react";
import { PutNumberList } from "../api/adminHomeAxios";
import {
  getClassInfo,
  patchGradeClassInfo,
  patchStudentAttend,
} from "../api/studentListAxios";

// 교원 승인 확인 모달
export const TeacherAcceptModal = ({
  modalOpen,
  setModalOpen,
  setAcceptOk,
}) => {
  const handleOk = () => {
    setAcceptOk(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>해당 교원을 승인 하시겠습니까?</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 회원가입, 마이페이지 모달
export const Modal = ({ isOpen, onRequestClose, children }) => {
  const handleTestClose = () => {
    onRequestClose();
  };
  return (
    <>
      {isOpen && (
        <ModalContain>
          <ModalBody onClick={e => e.stopPropagation()}>
            <ModalCloseBtn onClick={handleTestClose}>✖</ModalCloseBtn>
            {children}
          </ModalBody>
        </ModalContain>
      )}
    </>
  );
};

// 이메일 인증 확인 모달
export const EmailConFirmModal = ({
  authModal,
  setAuthModal,
  setEmailCheck,
}) => {
  const [emailConFirm, setEmailConFirm] = useState("");

  const handleCodeConfirm = e => {
    e.preventDefault();
    postEmailCodeConFirm(emailConFirm, setEmailCheck);
    setAuthModal(false);
  };

  const handleCancel = e => {
    e.preventDefault();
    setAuthModal(false);
  };

  const handleConfirmInput = e => {
    setEmailConFirm(e.target.value);
  };

  return (
    <>
      {authModal && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap" style={{ height: "230px" }}>
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
            </div>
            <div className="content">
              <label>이메일 인증번호</label>
              <input
                type="text"
                placeholder="인증번호 6자리를 입력해주세요"
                name="email-check"
                value={emailConFirm}
                onChange={e => handleConfirmInput(e)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="btns">
              <button
                onClick={e => {
                  handleCodeConfirm(e);
                }}
              >
                인증확인
              </button>
              <button onClick={e => handleCancel(e)}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 학반 정보 수정 모달
export const EditClassModal = ({
  saveCheckBox,
  editClassModalOpen,
  setEditClassModalOpen,
  setHandleOk,
}) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const [classList, setClassList] = useState("");
  const [payload, setPayload] = useState({
    userId: 0,
    year: todayYear,
    grade: 0,
    classNum: 0,
  });

  const handleOk = () => {
    saveCheckBox.forEach(item => {
      patchGradeClassInfo(payload, item);
    });
    setHandleOk(true);
    setEditClassModalOpen(false);
  };

  const closeModal = () => {
    setEditClassModalOpen(false);
  };

  const handleGrade = e => {
    setPayload({ ...payload, grade: parseInt(e.target.value) });
  };

  const handleClass = e => {
    setPayload({ ...payload, classNum: parseInt(e.target.value) });
  };

  useEffect(() => {
    getClassInfo(payload.grade, setClassList);
  }, [payload.grade]);

  return (
    <>
      {editClassModalOpen && (
        <EditClassModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <span className="title">
                <FontAwesomeIcon
                  icon={faExclamation}
                  className="warning-icon"
                />
                학반 정보 변경
              </span>
              <span className="description">
                변경할 학년과 반을 선택해주세요.
              </span>
            </div>
            <div className="content">
              <label htmlFor="grade">
                <select id="grade" onChange={e => handleGrade(e)}>
                  <option value="">학년</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                </select>
              </label>
              <label htmlFor="class">
                <select id="class" onChange={e => handleClass(e)}>
                  <option value="">반</option>
                  {classList &&
                    classList.map(item => (
                      <option value={item} key={item}>
                        {item}반
                      </option>
                    ))}
                </select>
              </label>
            </div>
            <div className="btns">
              <button onClick={handleOk}>저장</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </EditClassModalDiv>
      )}
    </>
  );
};

// 재학 여부 수정 모달
export const EditAttendModal = ({
  saveCheckBox,
  editAttendModalOpen,
  setEditAttendModalOpen,
  setSaveCheckBox,
  setHandleOk,
}) => {
  const [attendState, setAttendState] = useState("");

  // 체크박스 초기화
  const checkBoxInit = () => {
    const allCheckBox = document.querySelectorAll(".checkbox");
    allCheckBox.forEach(item => {
      item.checked = false;
    });
  };

  const handleOk = () => {
    saveCheckBox.forEach(item => patchStudentAttend(item, attendState));
    setEditAttendModalOpen(false);
    setHandleOk(true);
    setSaveCheckBox([]);
    checkBoxInit();
  };
  const closeModal = () => {
    setEditAttendModalOpen(false);
  };

  return (
    <>
      {editAttendModalOpen && (
        <EditAttendModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <span className="title">
                <FontAwesomeIcon
                  icon={faExclamation}
                  className="warning-icon"
                />
                학적 구분 변경
              </span>
              <span className="description">변경할 학적을 선택해주세요.</span>
            </div>
            <div className="content">
              <label htmlFor="">
                <select
                  name="grade"
                  id="grade"
                  onChange={e => setAttendState(e.target.value)}
                >
                  <option value="">학적 선택</option>
                  <option value="enroll">재학</option>
                  <option value="graduation">졸업</option>
                  <option value="transfer">전학</option>
                  <option value="leave">자퇴</option>
                </select>
              </label>
            </div>
            <div className="btns">
              <button onClick={handleOk}>저장</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </EditAttendModalDiv>
      )}
    </>
  );
};

// 학반 정보 수정, 재학 여부 수정 에러 모달
export const EditErrorModal = ({ setEditErrModalOpen }) => {
  const handleOk = () => {
    setEditErrModalOpen(false);
  };

  return (
    <>
      <EditErrorModalStyle className="modal">
        <div className="dim"></div>
        <div className="content-wrap">
          <div className="header">
            <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
            <span></span>
          </div>
          <div className="content">
            <span>선택된 항목이 없습니다.</span>
            <span>변경할 항목을 선택해주세요.</span>
          </div>
          <div className="btns">
            <button onClick={handleOk}>확인</button>
          </div>
        </div>
      </EditErrorModalStyle>
    </>
  );
};

// 학생 승인 확인 모달
export const StudentAcceptModal = ({
  modalOpen,
  setModalOpen,
  setAcceptOk,
}) => {
  const handleOk = () => {
    setAcceptOk(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>해당 교원을 승인 하시겠습니까?</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 학생 승인 취소 모달
export const StudentCancelModal = ({
  modalOpen,
  setModalOpen,
  setCancelOk,
}) => {
  const handleOk = () => {
    setCancelOk(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>해당 학생을 승인 취소 하시겠습니까?</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 회원 탈퇴 모달
export const DeleteUserModal = ({ modalOpen, setModalOpen, setCancelOk }) => {
  const handleOk = () => {
    setCancelOk(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>정말 회원 탈퇴를 하시겠습니까?</span>
              <span>탈퇴한 계정은 영구 삭제되어 복구할 수 없습니다.</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 교내 비상연락망 수정 모달
export const SaveNumverModal = ({
  modalOpen,
  setModalOpen,
  setEditMode,
  numberList,
}) => {
  const handleOk = () => {
    PutNumberList(numberList);
    setModalOpen(false);
    setEditMode(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>저장 하시겠습니까?</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};
