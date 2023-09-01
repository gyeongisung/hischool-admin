import React, { useEffect, useState } from "react";
import {
  SubjectListDiv,
  SubjectListGradeButton,
  SubjectListGradeSubject,
  SubjectListWrap,
} from "../styles/SubjectList";
import { Link } from "react-router-dom";
import { getALLSubListData } from "../api/inputSubjectAxios";

const SubjectList = () => {
  const [grade1Data, setGrade1Data] = useState([]);
  const [grade2Data, setGrade2Data] = useState([]);
  const [grade3Data, setGrade3Data] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const grade1Data = await getALLSubListData(1);
      const grade2Data = await getALLSubListData(2);
      const grade3Data = await getALLSubListData(3);
      setGrade1Data(grade1Data);
      setGrade2Data(grade2Data);
      setGrade3Data(grade3Data);
    };
    fetchData();
  }, []);
  return (
    <SubjectListWrap>
      <div className="titile">
        <h3>과목 관리</h3>
        <Link to="/subjectlist/input">
          <button>과목 정보 입력</button>
        </Link>
      </div>
      <SubjectListGradeSubject>
        <div>
          <SubjectListGradeButton>
            <span>1학년</span>
            <Link to={`/subject/wc/${1}`}>
              <button>수정</button>
            </Link>
          </SubjectListGradeButton>
          <SubjectListDiv>
            <ul>
              <li>
                <ul>
                  <li>번호</li>
                  <li>세부과목</li>
                </ul>
              </li>
              <li>
                {grade1Data.map((item, index) => (
                  <ul key={index}>
                    <li>{index + 1}</li>
                    <li>{item.subjectNm}</li>
                  </ul>
                ))}
              </li>
            </ul>
          </SubjectListDiv>
        </div>
        <div>
          <SubjectListGradeButton>
            <span>2학년</span>
            <Link to={`/subject/wc/${2}`}>
              <button>수정</button>
            </Link>
          </SubjectListGradeButton>
          <SubjectListDiv>
            <ul>
              <li>
                <ul>
                  <li>번호</li>
                  <li>세부과목</li>
                </ul>
              </li>
              <li>
                {grade2Data.map((item, index) => (
                  <ul key={index}>
                    <li>{index + 1}</li>
                    <li>{item.subjectNm}</li>
                  </ul>
                ))}
              </li>
            </ul>
          </SubjectListDiv>
        </div>
        <div>
          <SubjectListGradeButton>
            <span>3학년</span>
            <Link to={`/subject/wc/${3}`}>
              <button>수정</button>
            </Link>
          </SubjectListGradeButton>
          <SubjectListDiv>
            <ul>
              <li>
                <ul>
                  <li>번호</li>
                  <li>세부과목</li>
                </ul>
              </li>
              <li>
                {grade3Data.map((item, index) => (
                  <ul key={index}>
                    <li>{index + 1}</li>
                    <li>{item.subjectNm}</li>
                  </ul>
                ))}
              </li>
            </ul>
          </SubjectListDiv>
        </div>
      </SubjectListGradeSubject>
    </SubjectListWrap>
  );
};

export default SubjectList;
