import React, { useState, useEffect } from "react";
import {
  editSubList,
  getALLMainSubData,
  getALLSubListData,
  getSubData,
} from "../api/inputSubjectAxios";
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

  const [mainSubjects, setMainSubjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const mainSubjectData = await getALLMainSubData();
      mainSubjectData.map(async item => {
        const subSubjectData = await getSubData(item.categoryId);
        item.subDetail = subSubjectData;
      });
      setMainSubjects(mainSubjectData);

      const gradeSubjectData = await getALLSubListData(gradeId);
      const parseItems = gradeSubjectData.map(item => {
        const rCategoryID = item.categoryId;
        const selectItem = mainSubjectData.find(
          temp => temp.categoryId === rCategoryID,
        );
        item.subDetail = selectItem.subDetail;
        // selectItem[0].subjectId = item.subjectId;
        return item;
      });
      // console.log("데이터 정리 ", parseItems);

      setGradeData(parseItems);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // console.log("모아둔 데이터", mainSubjects);
  }, [mainSubjects]);

  const handleSaveButtonClick = async () => {
    for (const student of gradeData) {
      if (!student.subjectId) {
        alert("세부 과목을 선택해주세요.");
        return;
      }
    }
    const postDataList = gradeData.map(item => ({ subjectId: item.subjectId }));
    try {
      await editSubList(gradeId, postDataList);
      navigate(-1);
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
  };

  const handleback = () => {
    navigate(-1);
  };

  const deleteItem = _item => {
    const newGradeData = gradeData.filter(
      item => item.subjectId !== _item.subjectId,
    );
    setGradeData(newGradeData);
  };

  return (
    <SubjectListWrap>
      <h2>{gradeId}학년 과목 수정</h2>
      <ListGradeButton>
        <button className="handleWc" onClick={handleSaveButtonClick}>
          수정
        </button>
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
              mainSubjects={mainSubjects}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </ListGradeSubject>
    </SubjectListWrap>
  );
};
export default SubjectWC;
