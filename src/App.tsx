import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import AdminHome from "./pages/AdminHome";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Main />}>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/notice" element={<Notice />} />
          <Route path="/admin/notice/:noticeId" element={<NoticeDetail />} />
          <Route
            path="/admin/notice/editing/:noticeId"
            element={<NoticeWC />}
          />
          <Route path="/admin/notice/writing" element={<NoticeWC />} />
          <Route path="/admin/subjectlist" element={<SubjectList />} />
          <Route path="/admin/subjectlist/input" element={<InputSubject />} />
          <Route path="/admin/subject/wc/:gradeId" element={<SubjectWC />} />
          <Route path="/admin/teacherlist" element={<TeacherList />} />
          <Route path="/admin/teacherlist/signlist" element={<SignList />} />
          <Route
            path="/admin/teacherlist/detailinfo"
            element={<TeacherDetailInfo />}
          />
          <Route path="/admin/studentlist" element={<StudentList />} />
          <Route path="/admin/liferecord" element={<LifeRecord />} />
          <Route path="/admin/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
