import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import AdminHome from "./pages/AdminHome";
import Notice from "./pages/Notice";
import SubjectList from "./pages/SubjectList";
import TeacherList from "./pages/TeacherList";
import SignList from "./pages/SignList";
import TeacherDetailInfo from "./pages/TeacherDetailInfo";
import StudentList from "./pages/StudentList";
import LifeRecord from "./pages/LifeRecord";
import About from "./pages/About";
import NoticeWrite from "./pages/NoticeWrite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Main />}>
          <Route path="/home" element={<AdminHome />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/write" element={<NoticeWrite />} />
          <Route path="/subjectlist" element={<SubjectList />} />
          <Route path="/teacherlist" element={<TeacherList />} />
          <Route path="/signlist" element={<SignList />} />
          <Route path="/teacherdetailinfo" element={<TeacherDetailInfo />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/liferecord" element={<LifeRecord />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
