import React, { useState, useEffect } from "react";
import {
  getALLSubListData,
} from "../api/inputSubjectAxios";
import { useParams } from "react-router";
import {
  ListGradeButton,
  ListGradeSubject,
  SubjectListWCDiv,
  SubjectListWrap,
} from "../styles/SubjectList";
import TSubjectUpdate from "../components/subject/TSubjectUpdate";

const SubjectWC = () => {
  const { gradeId } = useParams();
  const [gradeData, setGradeData] = useState([]);

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
        <SubjectListWCDiv>
          <ul>
            <li>
              <ul>
                <li>번호</li>
                <li>과목 이름</li>
                <li>과목 이름</li>
                <li>삭제</li>
              </ul>
            </li>
            {gradeData.map((item, index) => (
              <TSubjectUpdate key={index} index={index} item={item[index]} />
            ))}
          </ul>
        </SubjectListWCDiv>
      </ListGradeSubject>
    </SubjectListWrap>
  );
};

export default SubjectWC;
