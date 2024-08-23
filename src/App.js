import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Dashboard from "./Components/Dashboard/Dashboard";
import PageNotFound from "./Components/Pagenotfound/PageNotFound";
import Footer from "./Components/Footer/Footer";
import Aside from "./Components/Aside/Aside";
import Student from "./Components/Student/Student";
import Teacher from "./Components/Teacher/Teacher";
import Other from "./Components/Other/Other";
import StudentList from "./Components/StudentList/StudentList";
import TeacherList from "./Components/TeacherList/TeacherList";




function App() {
  return (
  
      <BrowserRouter>
        <Nav/>
        <Aside/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/teacher" element={<Teacher/>} />
          <Route path="/studentlist" element={<StudentList/>} />
          <Route path="/teacherlist" element={<TeacherList/>} />
          <Route path="/other" element={<Other/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
