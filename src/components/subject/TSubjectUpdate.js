import React, { useState, useEffect } from "react";
import { SWCinput } from "../../styles/SubjectList";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TSubjectUpdate = ({
  item,
  gradeData,
  setGradeData,
  mainSubjects,
  deleteItem,
}) => {
  const [mainSubject, setMainSubject] = useState(item.categoryId);
  const [subject, setSubject] = useState(item.subjectId);
  const [scSbjId, setScSbjId] = useState(item.scSbjId);

  useEffect(() => {
    setMainSubject(item.categoryId);
    setSubject(item.subjectId);
    setScSbjId(item.scSbjId);
  }, [gradeData, item.subjectId]);


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
    deleteItem(item);
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
        {item?.subDetail.map(subSubject => (
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
