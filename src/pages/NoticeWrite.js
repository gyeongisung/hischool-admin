import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  NoticeButton,
  NoticeWhiteNoitce,
  NoticeWrap,
} from "../styles/NoticeStyle";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoticeWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const navigate = useNavigate();

  // ReactQull 태그 reference 저장
  const quillRef = useRef(null);

  // 툴바 설정하기
  // 화면이 갱신될때마다 새로 정의할 필요가 없음.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
        ],
      },
    }),
    [],
  );

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleContentChange = event => {
    setContent(event);
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
  const handleCencle = () => {
    navigate(-1);
  };

  return (
    <NoticeWrap>
      <h3>게시판 글쓰기</h3>
      <label>
        중요 공지 시 체크
        <input
          type="checkbox"
          checked={isImportant}
          onChange={handleCheckboxChange}
        />
      </label>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <NoticeWhiteNoitce>
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={handleContentChange}
            modules={modules}
          />
        </NoticeWhiteNoitce>
        <NoticeButton type="submit">글쓰기</NoticeButton>
      </form>
      <NoticeButton onClick={handleCencle}>취소</NoticeButton>
    </NoticeWrap>
  );
};

export default NoticeWrite;
