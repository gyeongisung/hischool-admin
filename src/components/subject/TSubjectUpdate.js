import React, { useState, useEffect } from "react";
import {
  getALLMainSubData,
  getALLSubData,
  getALLSubListData,
} from "../../api/inputSubjectAxios";

const TSubjectUpdate = ({ index, item }) => {
  const [mainSubjects, setMainSubjects] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [mainSubject, setMainSubject] = useState("");
  const [subject, setSubject] = useState(""); // 별도의 subject 상태 변수

  useEffect(() => {
    const fetchData = async () => {
      const mainSubjectData = await getALLMainSubData();
      setMainSubjects(mainSubjectData);

      if (mainSubject) {
        const subSubjectData = await getALLSubData(mainSubject);
        setSubSubjects(subSubjectData);
      }
    };
    fetchData();
  }, [mainSubject]);

  const handleMainSubChange = e => {
    setMainSubject(e.target.value);
  };

  const handleSubChange = e => {
    setSubject(e.target.value);
  };
  return (
    <li key={index}>
      <ul>
        <li>{index + 1}</li>
        <li>
          <select
            name="mainSubject"
            value={mainSubject}
            onChange={handleMainSubChange}
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
          <select name="subSubject" value={subject} onChange={handleSubChange}>
            <option value="">세부 과목 선택</option>
            {subSubjects.map(subSubject => (
              <option key={subSubject.subjectId} value={subSubject.subjectId}>
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
  );
};

export default TSubjectUpdate;
