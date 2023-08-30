import React from "react";
import "../styles/quill.snow.css";
import { useLocation } from "react-router";
import NoticeWrite from "../components/NoticeWrite";
import NoticeCorrection from "../components/NoticeCorrection";

const NoticeWC = () => {
  const location = useLocation();
  const noticeId = location.state?.noticeId;
  const mode = location.pathname.includes("writing") ? "writing" : "editing";

  return (
    <div>
      {mode === "writing" && <NoticeWrite />}
      {mode === "editing" && <NoticeCorrection noticeId={noticeId} />}
    </div>
  );
};

export default NoticeWC;
