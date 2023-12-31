import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router";

import ReactQuill from "react-quill";
import "../../styles/notice/quill.snow.css";
import { postNoticeData } from "../../api/noticesAxios";
import {
  NoticeButton,
  NoticeWUButton,
  NoticeWUTitle,
  NoticeWhiteNoitce,
  NoticeWrap,
} from "../../styles/notice/NoticeStyle";

const NoticeWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const navigate = useNavigate();

  const quillRef = React.useRef(null);

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

  const handleSubmit = async event => {
    event.preventDefault();
    const tempTitle = title.trim();
    if (tempTitle === "") {
      setTitle("");
      alert("제목은 공백이 안됩니다.");
      return;
    }
    const dataToSend = {
      title: title,
      content: content,
      imptyn: parseInt(isImportant ? 1 : 0),
    };
    try {
      await postNoticeData(dataToSend);
    } catch (error) {
      console.error("글 등록 오류:", error);
    }

    setTitle("");
    setContent("");
    setIsImportant(false);
    navigate(-1);
  };

  const handleCencle = e => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <NoticeWrap>
      <h3>게시판 글쓰기</h3>
      <label htmlFor="check-box">
        중요 공지
        <input
          type="checkbox"
          id="check-box"
          checked={isImportant}
          onChange={handleCheckboxChange}
        />
      </label>
      <form onSubmit={handleSubmit}>
        <NoticeWUTitle>
          <label htmlFor="search-title">제목</label>
          <input
            type="text"
            id="search-title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </NoticeWUTitle>
        <NoticeWhiteNoitce>
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={handleContentChange}
            modules={modules}
            style={{ height: "92%", border: "none" }}
          />
        </NoticeWhiteNoitce>
        <NoticeWUButton>
          <NoticeButton type="submit">저장</NoticeButton>
          <NoticeButton onClick={e => handleCencle(e)}>취소</NoticeButton>
        </NoticeWUButton>
      </form>
    </NoticeWrap>
  );
};

export default NoticeWrite;
