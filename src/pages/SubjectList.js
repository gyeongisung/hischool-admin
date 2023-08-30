import React from "react";
import {
  SubjectListDiv,
  SubjectListGradeButton,
  SubjectListWrap,
} from "../styles/SubjectList";
import { Link } from "react-router-dom";

const SubjectList = () => {
  return (
    <SubjectListWrap>
      <h3>과목 관리</h3>
      <div className="SubjectInput">
        <Link to="/subjectlist/input">
          <button>과목 정보 입력</button>
        </Link>
      </div>
      <div>
        <SubjectListGradeButton>
          <span>1학년</span>
          <button>수정</button>
        </SubjectListGradeButton>
        <SubjectListDiv>
          <ul>
            <li>
              <ul>
                <li>과목계열</li>
                <li>세부과목</li>
                <li>과목계열</li>
                <li>세부과목</li>
              </ul>
            </li>
          </ul>
        </SubjectListDiv>
      </div>
      <div>
        <SubjectListGradeButton>
          <span>2학년</span>
          <button>수정</button>
        </SubjectListGradeButton>
        <SubjectListDiv>
          <ul>
            <li>
              <ul>
                <li>과목계열</li>
                <li>세부과목</li>
                <li>과목계열</li>
                <li>세부과목</li>
              </ul>
            </li>
          </ul>
        </SubjectListDiv>
      </div>
      <div>
        <SubjectListGradeButton>
          <span>3학년</span>
          <button>수정</button>
        </SubjectListGradeButton>
        <SubjectListDiv>
          <ul>
            <li>
              <ul>
                <li>과목계열</li>
                <li>세부과목</li>
                <li>과목계열</li>
                <li>세부과목</li>
              </ul>
            </li>
          </ul>
        </SubjectListDiv>
      </div>
    </SubjectListWrap>
  );
};

export default SubjectList;
