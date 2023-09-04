import React, { useState, useEffect } from "react";
import {
  getALLMainSubData,
  getALLSubData,
  getALLSubListData,
} from "../api/inputSubjectAxios";
import { useParams } from "react-router";
import {
  ListGradeButton,
  ListGradeSubject,
  SubjectListWCDiv,
  SubjectListWrap,
} from "../styles/SubjectList";

const SubjectWC = () => {
  const { gradeId } = useParams();
  const [mainSubjects, setMainSubjects] = useState([]);
  const [selectedMainSubject, setSelectedMainSubject] = useState(""); // 수정할 과목의 과목 계열 ID
  const [subSubjects, setSubSubjects] = useState([]);
  const [selectedSubSubject, setSelectedSubSubject] = useState(""); // 수정할 과목의 세부 과목 ID
  const [allSubListData, setAllSubListData] = useState([]);

  useEffect(() => {
    // getALLSubListData 데이터를 가져와서 설정합니다.
    const fetchAllSubListData = async () => {
      const data = await getALLSubListData();
      setAllSubListData(data);

      // 초기 선택 값으로 수정할 과목의 과목 계열 ID 및 세부 과목 ID를 설정합니다.
      const defaultMainSubjectId = 1; // 예시: 1번 과목 계열
      const defaultSubSubjectId = 10; // 예시: 10번 세부 과목
      setSelectedMainSubject(defaultMainSubjectId);
      setSelectedSubSubject(defaultSubSubjectId);
    };

    fetchAllSubListData();
  }, []);

  useEffect(() => {
    // 과목 계열 데이터를 가져와서 상태로 설정합니다.
    const fetchMainSubjects = async () => {
      const data = await getALLMainSubData();
      setMainSubjects(data);
    };

    fetchMainSubjects();
  }, []);

  useEffect(() => {
    // selectedMainSubject가 변경될 때마다 해당 과목 계열에 속하는 세부 과목 데이터를 가져와서 상태로 설정합니다.
    const fetchSubSubjects = async () => {
      if (selectedMainSubject) {
        const data = await getALLSubData(selectedMainSubject); // selectedMainSubject에 따른 세부 과목 데이터 가져오기
        setSubSubjects(data);
      }
    };

    fetchSubSubjects();
  }, [selectedMainSubject]);

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
            <li>
              <ul>
                <li>번호자리</li>
                <li>
                  <select
                    name="mainSubject"
                    value={selectedMainSubject}
                    onChange={e => setSelectedMainSubject(e.target.value)}
                  >
                    <option value="">과목 계열 선택</option>
                    {mainSubjects.map(mainSubject => (
                      <option
                        key={mainSubject.categoryId}
                        value={mainSubject.categoryId}
                      >
                        {mainSubject.categoryNm}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <select
                    name="subSubject"
                    value={selectedSubSubject}
                    onChange={e => setSelectedSubSubject(e.target.value)}
                  >
                    <option value="">세부 과목 선택</option>
                    {subSubjects.map(subSubject => (
                      <option
                        key={subSubject.subjectId}
                        value={subSubject.subjectId}
                      >
                        {subSubject.subjectNm}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <button>삭제</button>
                </li>
              </ul>
            </li>
          </ul>
        </SubjectListWCDiv>
      </ListGradeSubject>
    </SubjectListWrap>
  );
};

export default SubjectWC;
