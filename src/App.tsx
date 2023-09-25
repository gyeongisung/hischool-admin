import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Notice from "./pages/notice/Notice";
import SubjectList from "./pages/SubjectList";
import TeacherList from "./pages/TeacherList";
import SignList from "./pages/SignList";
import TeacherDetailInfo from "./pages/TeacherDetailInfo";
import StudentList from "./pages/StudentList";
import LifeRecord from "./pages/LifeRecord";
import About from "./pages/About";
import NoticeDetail from "./pages/notice/NoticeDetail";
import InputSubject from "./pages/InputSubject";
import NoticeWC from "./pages/notice/NoticeWC";
import SubjectWC from "./pages/SubjectWC";
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Main />}>
          <Route path="/home" element={<AdminHome />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:noticeId" element={<NoticeDetail />} />
          <Route path="/notice/editing/:noticeId" element={<NoticeWC />} />
          <Route path="/notice/writing" element={<NoticeWC />} />
          <Route path="/subjectlist" element={<SubjectList />} />
          <Route path="/subjectlist/input" element={<InputSubject />} />
          <Route path="/subject/wc/:gradeId" element={<SubjectWC />} />
          <Route path="/teacherlist" element={<TeacherList />} />
          <Route path="/teacherlist/signlist" element={<SignList />} />
          <Route
            path="/teacherlist/detailinfo"
            element={<TeacherDetailInfo />}
          />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/liferecord" element={<LifeRecord />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
