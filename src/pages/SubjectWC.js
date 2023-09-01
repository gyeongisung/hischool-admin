import React, { useEffect, useState } from "react";
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
  const [gradeData, setGradeData] = useState([]);
  const [mainSubjectData, setMainSubjectData] = useState([]);
  const [subSubjectData, setSubSubjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gradeData = await getALLSubListData(gradeId);
      setGradeData(gradeData);

      const fetchedMainSubjectData = await getALLMainSubData();
      setMainSubjectData(fetchedMainSubjectData);

      const fetchedSubSubjectData = await Promise.all(
        fetchedMainSubjectData.map(async mainSubject => {
          const subData = await getALLSubData(mainSubject.categoryId);
          return {
            mainsubject: mainSubject.categoryNm,
            data: subData.map(subSubject => ({
              subsubject: subSubject.subjectNm,
              subjectId: subSubject.subjectId,
            })),
          };
        }),
      );
      setSubSubjectData(fetchedSubSubjectData);
    };
    fetchData();
  }, [gradeId]);

  console.log("gradeData", gradeData);
  console.log("mainSubjectData", mainSubjectData);
  console.log("subSubjectData", subSubjectData);

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
              {gradeData.map((item, index) => (
                <ul key={index}>
                  <li>{index + 1}</li>
                  <li>
                    <select name="mainsubject">
                      <option value={item.categoryId}>
                        {item.categoryNm}
                      </option>
                      {mainSubjectData.map(mainSubject => (
                        <option
                          key={mainSubject.categoryId}
                          value={mainSubject.categoryNm}
                        >
                          {mainSubject.categoryNm}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li>
                    <select name="subject">
                      <option value="">세부 과목 선택</option>
                      {subSubjectData.map(subDataItem => (
                        <optgroup
                          key={subDataItem.mainsubject}
                          label={subDataItem.mainsubject}
                        >
                          {subDataItem.data.map(subSubject => (
                            <option
                              key={subSubject.subjectId}
                              value={subSubject.subsubject}
                            >
                              {subSubject.subsubject}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
              ))}
            </li>
          </ul>
        </SubjectListWCDiv>
      </ListGradeSubject>
    </SubjectListWrap>
  );
};

export default SubjectWC;
