import React, { useState, useEffect } from "react";
import { getALLMainSubData, getSubData } from "../../api/inputSubjectAxios";
import { SWCinput } from "../../styles/SubjectList";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TSubjectUpdate = ({ item, gradeData, setGradeData }) => {
  const [mainSubjects, setMainSubjects] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [mainSubject, setMainSubject] = useState(item.categoryId);
  const [subject, setSubject] = useState(item.subjectId);
  const [scSbjId, setScSbjId] = useState(item.scSbjId);

  useEffect(() => {
    setMainSubject(item.categoryId);
    setSubject(item.subjectId);
    setScSbjId(item.scSbjId);
  }, [gradeData, item.subjectId]);

  useEffect(() => {
    const fetchData = async () => {
      const mainSubjectData = await getALLMainSubData();
      setMainSubjects(mainSubjectData);
      if (mainSubject) {
        const subSubjectData = await getSubData(mainSubject);
        setSubSubjects(subSubjectData);
      }
    };
    fetchData();
  }, [mainSubject]);

  const handleMainSubChange = e => {
    const newMainSubject = e.target.value;
    setMainSubject(newMainSubject);
    const newGradeData = gradeData.map(item => {
      if (item.scSbjId === scSbjId) {
        return {
          ...item,
          categoryId: newMainSubject,
        };
      }
      return item;
    });
    setGradeData(newGradeData);
  };

  const handleSubChange = e => {
    const newSubject = e.target.value;
    setSubject(newSubject);
    const newGradeData = gradeData.map(item => {
      if (item.scSbjId === scSbjId) {
        return {
          ...item,
          subjectId: newSubject,
        };
      }
      return item;
    });
    setGradeData(newGradeData);
  };

  const handleDelete = () => {
    const newGradeData = gradeData.filter(item => item.scSbjId !== scSbjId);
    setGradeData(newGradeData);
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
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </SWCinput>
  );
};

export default TSubjectUpdate;
