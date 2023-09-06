import React, { useState, useEffect } from "react";
import { getALLSubListData } from "../api/inputSubjectAxios";
import { useParams } from "react-router";
import {
  ListGradeButton,
  ListGradeSubject,
  SWCTitle,
  SubjectListWCDiv,
  SubjectListWrap,
} from "../styles/SubjectList";
import TSubjectUpdate from "../components/subject/TSubjectUpdate";

const SubjectWC = () => {
  const { gradeId } = useParams();
  const [gradeData, setGradeData] = useState([]);
  const [listDelete, setListDelete] = useState([]); // 초기값을 빈 배열로 설정
  console.log(gradeData);
  useEffect(() => {
    const fetchData = async () => {
      const gradeSubjectData = await getALLSubListData(gradeId);
      setGradeData(gradeSubjectData);
    };
    fetchData();
  }, [gradeId]);

  return (
    <SubjectListWrap>
      <h2>{gradeId}학년 과목 수정</h2>
      <ListGradeButton>
        <button>수정</button>
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
              setListDelete={setListDelete} // setListDelete 함수 전달
              listDelete={listDelete} // listDelete 상태 전달
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
