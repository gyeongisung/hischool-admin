import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import AdminHome from "./pages/AdminHome";
import Notice from "./pages/Notice";
import SubjectList from "./pages/SubjectList";
import RecordList from "./pages/RecordList";
import TeacherList from "./pages/TeacherList";
import SignList from "./pages/SignList";
import ResignList from "./pages/ResignList";
import TeacherDetailInfo from "./pages/TeacherDetailInfo";
import StudentList from "./pages/StudentList";
import ClassList from "./pages/ClassList";
import LifeRecord from "./pages/LifeRecord";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Main />}>
          <Route path="/home" element={<AdminHome />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/subjectlist" element={<SubjectList />} />
          <Route path="/recordlist" element={<RecordList />} />
          <Route path="/teacherlist" element={<TeacherList />} />
          <Route path="/signlist" element={<SignList />} />
          <Route path="/resignlist" element={<ResignList />} />
          <Route path="/teacherdetailinfo" element={<TeacherDetailInfo />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/classlist" element={<ClassList />} />
          <Route path="/liferecord" element={<LifeRecord />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
