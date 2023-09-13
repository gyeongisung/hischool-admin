import React, { useEffect, useMemo, useState } from "react";

import ReactQuill from "react-quill";
import "../../styles/notice/quill.snow.css";
import { useNavigate } from "react-router";
import { getNoticeData, patchNoticeData } from "../../api/noticesAxios";
import {
  NoticeButton,
  NoticeWUButton,
  NoticeWUTitle,
  NoticeWhiteNoitce,
  NoticeWrap,
} from "../../styles/notice/NoticeStyle";

const NoticeCorrection = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const navigate = useNavigate();
  const quillRef = React.useRef(null);
  const noticeId = props.noticeId;

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
                -"#cce8cc",
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

  const handleCencle = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchNotice() {
      try {
        const fetchedNotice = await getNoticeData(noticeId);
        setTitle(fetchedNotice.title);
        setContent(fetchedNotice.content);
        setIsImportant(fetchedNotice.imptYn === 1);
      } catch (error) {
        console.error("공지를 불러오는 중 오류 발생:", error);
      }
    }
    fetchNotice();
  }, [noticeId]);

  const handleSubmit = async event => {
    event.preventDefault();
    const tempTitle = title.trim();
    if (tempTitle === "") {
      setTitle("");
      alert("제목은 공백이 안됩니다.");
      return;
    }
    try {
      const dataToSend = {
        noticeId: noticeId,
        title: title,
        content: content,
        imptyn: isImportant ? 1 : 0,
      };
      await patchNoticeData(dataToSend);
      navigate(-1);
    } catch (error) {
      console.error("글 수정 오류:", error);
    }
  };

  return (
    <NoticeWrap>
      <h3>게시판 수정</h3>
      <label>
        중요 공지
        <input
          type="checkbox"
          checked={isImportant}
          onChange={handleCheckboxChange}
        />
      </label>
      <form onSubmit={handleSubmit}>
        <NoticeWUTitle>
          <label>제목</label>
          <input type="text" value={title} onChange={handleTitleChange} />
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
          <NoticeButton type="submit">수정</NoticeButton>
          <NoticeButton onClick={handleCencle}>취소</NoticeButton>
        </NoticeWUButton>
      </form>
    </NoticeWrap>
  );
};

export default NoticeCorrection;
