import React, { useState, useEffect } from "react";
import { getALLMainSubData, getALLSubData } from "../../api/inputSubjectAxios";
import { SWCinput } from "../../styles/SubjectList";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TSubjectUpdate = ({
  item,
  setListDelete,
  listDelete,
  gradeData,
  setGradeData,
}) => {
  const [mainSubjects, setMainSubjects] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [mainSubject, setMainSubject] = useState(item.categoryId);
  const [subject, setSubject] = useState(item.subjectId);
  const scSbjId = item.scSbjId;
  const [isDeleting, setIsDeleting] = useState(false);
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
  // const handleDelete = () => {
  //   if (listDelete.includes(scSbjId)) {
  //     setListDelete(prevListDelete =>
  //       prevListDelete.filter(id => id !== scSbjId),
  //     );
  //   } else {
  //     setListDelete(prevListDelete => [...prevListDelete, scSbjId]);
  //   }
  //   setIsDeleting(!isDeleting);
  // };
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
      {isDeleting ? (
        <>
          <button onClick={handleDelete}>취소</button>
        </>
      ) : (
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      )}
    </SWCinput>
  );
};
export default TSubjectUpdate;
