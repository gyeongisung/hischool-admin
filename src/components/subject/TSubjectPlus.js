import React, { useEffect, useState } from "react";
import { ISJinput } from "../../styles/InputSubjectStyle";

const TSubjectPlus = ({
  id,
  item,
  deleteStudentData,
  subjectData,
  updateLastSavedData,
  deleteStudentIndex,
}) => {
  const [studentData, setStudentData] = useState([]);
  const [mainSubject, setMainSubject] = useState("");
  const [detailSub, setDetailSub] = useState("");

  useEffect(() => {
    setStudentData(item.subjectlist);
    setMainSubject(item.subject);
    setDetailSub(item.subjectId);
  }, [item]);

  const handleInputChange = e => {
    const { value } = e.target;
    const updatedValue = value;

    const nowList = subjectData.find(temp => temp.mainsubject === updatedValue);

    if (nowList) {
      const updatedData = {
        subject: updatedValue,
        subjectId: "",
        subjectlist: nowList.data,
      };
      setMainSubject(updatedValue);
      setDetailSub("");
      setStudentData(nowList.data);

      updateLastSavedData(id, updatedData);
    } else {
      const updatedData = {
        subject: "",
        subjectId: "",
        subjectlist: [],
      };
      setMainSubject(updatedValue);
      setDetailSub("세부 과목 선택");
      setStudentData([]);
      updateLastSavedData(id, updatedData);
    }
  };

  const handleInputChangeSub = e => {
    const { value } = e.target;
    let updatedValue = value;
    if (updatedValue === "세부 과목 선택") {
      updatedValue = "";
    }
    const nowList = subjectData.find(temp => temp.mainsubject === item.subject);
    const updatedData = {
      subject: mainSubject,
      subjectId: updatedValue,
      subjectlist: nowList?.data,
    };
    setDetailSub(updatedValue);
    updateLastSavedData(id, updatedData);
  };

  const handleDelete = () => {
    if (item.subjectId !== "") {
      deleteStudentData(item.subjectId);
    } else {
      deleteStudentIndex(id);
    }
  };
  return (
    <div>
      <ISJinput>
        <select name="subject" value={mainSubject} onChange={handleInputChange}>
          <option value="과목 계열 선택">과목 계열 선택</option>
          {subjectData.map(mainSubject => {
            return (
              <option
                key={mainSubject.mainsubject}
                value={mainSubject.mainsubject}
              >
                {mainSubject.mainsubject}
              </option>
            );
          })}
        </select>
        <select
          name="subjectId"
          value={detailSub || ""}
          onChange={handleInputChangeSub}
        >
          <option value="세부 과목 선택">세부 과목 선택</option>
          {studentData.map((subSubject, index) => (
            <option key={index} value={subSubject.subjectid}>
              {subSubject.subsubject}
            </option>
          ))}
        </select>
        <button onClick={handleDelete}>삭제</button>
      </ISJinput>
    </div>
  );
};

export default TSubjectPlus;
