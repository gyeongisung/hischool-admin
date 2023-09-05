import React, { useState, useEffect } from "react";
import {
  deleteSubList,
  getALLMainSubData,
  getALLSubData,
} from "../../api/inputSubjectAxios";
import { SWCinput } from "../../styles/SubjectList";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const TSubjectUpdate = ({ item, updateGradeData }) => {
  const [mainSubjects, setMainSubjects] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [mainSubject, setMainSubject] = useState(item.categoryId);
  const [subject, setSubject] = useState(item.subjectId);
  const navigate = useNavigate();
  const scSbjId = item.scSbjId;

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

  const handleDelect = async () => {
    try {
      await deleteSubList(scSbjId);
      console.log("삭제가 됐을 것 같네요.");
      updateGradeData(scSbjId);
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <SWCinput>
      <select
        name="mainSubject"
        value={mainSubject}
        onChange={handleMainSubChange}
      >
        <option value="">과목 계열 선택</option>
        {mainSubjects.map(mainSubject => (
          <option key={mainSubject.categoryId} value={mainSubject.categoryId}>
            {mainSubject.categoryNm}
          </option>
        ))}
      </select>
      <select name="subSubject" value={subject} onChange={handleSubChange}>
        <option value="">세부 과목 선택</option>
        {subSubjects.map(subSubject => (
          <option key={subSubject.subjectId} value={subSubject.subjectId}>
            {subSubject.subjectNm}
          </option>
        ))}
      </select>
      <button onClick={handleDelect}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </SWCinput>
  );
};

export default TSubjectUpdate;
