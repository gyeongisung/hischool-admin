import React, { useState, useEffect } from "react";
import { editSubList, getALLSubListData } from "../api/inputSubjectAxios";
import { useNavigate, useParams } from "react-router";
import {
  ListGradeButton,
  ListGradeSubject,
  SWCTitle,
  SubjectListWrap,
} from "../styles/SubjectList";
import TSubjectUpdate from "../components/subject/TSubjectUpdate";

const SubjectWC = () => {
  const { gradeId } = useParams();
  const [gradeData, setGradeData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const gradeSubjectData = await getALLSubListData(gradeId);
      setGradeData(gradeSubjectData);
    };
    fetchData();
  }, [gradeId]);
  console.log("gradeData", gradeData);

  const handleSaveButtonClick = () => {
    const postDataList = gradeData.map(item => ({ subjectId: item.subjectId }));
    try {
      editSubList(gradeId, postDataList);
      navigate(-1);
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
  };
  
  const handleback = () => {
    navigate(-1);
  };

  return (
    <SubjectListWrap>
      <h2>{gradeId}학년 과목 수정</h2>
      <ListGradeButton>
        <button onClick={handleSaveButtonClick}>수정</button>
        <button onClick={handleback}>취소</button>
      </ListGradeButton>
      <ListGradeSubject>
        <SWCTitle>
          <p>과목 계열</p>
          <p>세부 과목</p>
          <p>삭제</p>
        </SWCTitle>
        <div>
          {gradeData.map((item, index) => (
            <TSubjectUpdate
              key={index}
              item={item}
              gradeData={gradeData}
              setGradeData={setGradeData}
            />
          ))}
        </div>
      </ListGradeSubject>
    </SubjectListWrap>
  );
};
export default SubjectWC;
