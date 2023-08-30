import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import TSubjectPlus from "../components/TSubjectPlus";
import { getALLMainSubData, getALLSubData, postALLData } from "../api/inputSubjectAxios";
import {
  ISRButtonWrapper,
  InputSubJectWrap,
  SJButton,
  SJHeader,
  SJTitle,
} from "../styles/InputSubjectStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputSubject = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [lastSavedData, setLastSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [dropGrade, setDropGrade] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interimData = [{}];
    setStudentsData(interimData);
    setLastSavedData(interimData);
  }, []);

  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setLastSavedData(updateData);
  };

  console.log("lastSavedData :", lastSavedData);
  const handleSaveButtonClick = async () => {
    if (lastSavedData) {
      const dataToSend = lastSavedData.map(item => ({
        subjectid: parseInt(item.subjectid) || 0,
      }));
      await postALLData(dataToSend);
      navigate(-1);
    }
  };

  const handleAddButtonClick = () => {
    const newStudent = {
      subSubject: null,
      subject: null,
    };
    setStudentsData(data => [...data, newStudent]);
    setLastSavedData(data => [...data, newStudent]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // 과목 계열 가져오기
        const mainSubData = await getALLMainSubData();
        // 세부 과목 가져오기
        const newSubjectData = await Promise.all(
          mainSubData.map(async mainSubject => {
            const subData = await getALLSubData(mainSubject.categoryid);
            return {
              mainsubject: mainSubject.nm,
              data: subData.map(subSubject => ({
                subsubject: subSubject.nm,
                subjectid: subSubject.subjectid,
              })),
            };
          }),
        );
        setSubjectData(newSubjectData);
      } catch (err) {
        console.log(err);
        setSubjectData([]);
      }
    }
    fetchData();
  }, []);
  
  const handleGrade = e => {
    setDropGrade(e.target.value);
  };

  return (
    <InputSubJectWrap>
      <SJHeader>
        <h3>과목 정보 입력</h3>
        <select value={dropGrade} onChange={handleGrade}>
          <option value="">학년 선택</option>
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>
        </select>
        <SJButton>
          <button onClick={handleSaveButtonClick}>저장</button>
          <button onClick={() => navigate(-1)}>취소</button>
        </SJButton>
      </SJHeader>
      <SJTitle>
        <p>과목계열</p>
        <p>세부과목</p>
      </SJTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubjectPlus
            key={index}
            id={index}
            subjectData={subjectData}
            studentsData={studentsData[index]}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
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
