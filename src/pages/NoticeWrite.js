import React, { useState } from "react";
import { StudentListWrap } from "../styles/StudentListStyle";
import { useNavigate } from "react-router";
import { NoticeWhite } from "../styles/NoticeStyle";

const NoticeWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const navigate = useNavigate();

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleContentChange = event => {
    setContent(event.target.value);
  };
  const handleCheckboxChange = event => {
    setIsImportant(event.target.checked);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // 이 부분에 실제로 게시글을 서버로 전송하는 로직을 추가할 수 있습니다.
    console.log("제목:", title);
    console.log("내용:", content);
    console.log("공지 상태", isImportant ? "중요" : "일반");
    setTitle("");
    setContent("");
    setIsImportant(false);
    navigate(-1);
  };

  return (
    <StudentListWrap>
      <h1>게시판 글쓰기</h1>
      <label>
        중요 공지 시 체크
        <input
          type="checkbox"
          checked={isImportant}
          onChange={handleCheckboxChange}
        />
      </label>
      <form onSubmit={handleSubmit}>
        <NoticeWhite>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <div className="form-group">
            <textarea
              className="form-control summernote"
              rows="5"
              id="content"
            ></textarea>
          </div>
          <button type="submit">글쓰기</button>
        </NoticeWhite>
      </form>
    </StudentListWrap>
  );
};

export default NoticeWrite;
