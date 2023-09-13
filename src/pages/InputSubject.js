import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import TSubjectPlus from "../components/subject/TSubjectPlus";
import {
  getALLMainSubData,
  getALLSubData,
  postALLData,
} from "../api/inputSubjectAxios";
import {
  ISRButtonWrapper,
  InputSubJectWrap,
  SJBoard,
  SJButton,
  SJHeader,
  SJTitle,
} from "../styles/InputSubjectStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputSubject = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interimData = [
      {
        subject: "",
        subjectId: "",
        subjectlist: [],
      },
    ];
    setStudentsData(interimData);
  }, []);

  const updateLastSavedData = (_id, newData) => {
    const updateData = studentsData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setStudentsData(updateData);
  };

  const handleSaveButtonClick = async () => {
    if (!grade) {
      alert("학년을 선택해주세요.");
      return;
    }

    const subjectCheck = studentsData.find(item => item.subject === "");
    if (subjectCheck) {
      alert("과목계열 항목을 선택해주세요.");
      return;
    }
    const subjectIdCheck = studentsData.find(item => item.subjectId === "");
    if (subjectIdCheck) {
      alert("세부과목 항목을 선택해주세요.");
      return;
    }

    const dataToSend = studentsData.map(item => ({
      subjectId: parseInt(item.subjectId) || 0,
    }));

    await postALLData(grade, dataToSend);
    navigate(-1);
  };

  const handleAddButtonClick = () => {
    const newStudent = {
      subject: "",
      subjectId: "",
      subjectlist: [],
    };
    setStudentsData(data => [...data, newStudent]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // 과목 계열 가져오기
        const mainSubData = await getALLMainSubData();
        // 세부 과목 가져오기
        const newSubjectData = await Promise.all(
          mainSubData.map(async mainSubject => {
            const subData = await getALLSubData(mainSubject.categoryId);
            return {
              mainsubject: mainSubject.categoryNm,
              data: subData[grade].map(subSubject => ({
                subsubject: subSubject.subjectNm,
                subjectid: subSubject.subjectId,
              })),
            };
          }),
        );
        setSubjectData(newSubjectData);
      } catch (err) {
        setSubjectData([]);
      }
    }
    fetchData();
  }, [grade]);

  const handleGrade = e => {
    setGrade(e.target.value);
  };

  // 학생 데이터 삭제
  const deleteStudentData = _subjectId => {
    if (_subjectId !== "") {
      const tempStudentData = studentsData.filter(
        item => item.subjectId !== _subjectId,
      );
      setStudentsData(tempStudentData);
    }
  };
  const deleteStudentIndex = _idx => {
    
    const tempStudentData = studentsData.filter(
      (item, index) => index !== _idx,
    );
    setStudentsData(tempStudentData);
  };

  return (
    <InputSubJectWrap>
      <SJHeader>
        <div>
          <h3>과목 정보 입력</h3>
          <select name="user-grade" value={grade} onChange={handleGrade}>
            <option value="">학년 선택</option>
            <option value={1}>1학년</option>
            <option value={2}>2학년</option>
            <option value={3}>3학년</option>
          </select>
        </div>
        <SJButton>
          <button onClick={handleSaveButtonClick}>저장</button>
          <button onClick={() => navigate(-1)}>취소</button>
        </SJButton>
      </SJHeader>
      <SJTitle>
        <p>과목계열</p>
        <p>세부과목</p>
      </SJTitle>
      <SJBoard>
        {studentsData.map((item, index) => (
          <TSubjectPlus
            key={index}
            id={index}
            item={item}
            deleteStudentData={deleteStudentData}
            subjectData={subjectData}
            updateLastSavedData={updateLastSavedData}
            deleteStudentIndex={deleteStudentIndex}
          />
        ))}
      </SJBoard>
      <ISRButtonWrapper>
        <button onClick={handleAddButtonClick}>
          항목 추가
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </button>
      </ISRButtonWrapper>
    </InputSubJectWrap>
  );
};

export default InputSubject;
