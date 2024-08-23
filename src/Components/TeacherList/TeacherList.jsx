import React, { useEffect, useState } from "react";
import "./teacherlist.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../Firebase";

const TeacherList = () => {
  const [teacherlist,setTeacherlist]=useState([])
  const Teacherall= async ()=>{
    const db=getFirestore(app)
    const tecCollection=collection(db,'teachers')
    const TeacherSnapshot= await getDocs(tecCollection)
    const leaList=TeacherSnapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }))
    setTeacherlist(leaList)
  }
  useEffect(()=>{
        Teacherall();
  },[])
  return (
    <>
      <div className="mycontainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 add-teacherlist">teacher list</div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <table class="table table-hover">
                <thead>
                  <tr>
                    
                    <th scope="col">Full name</th>
                    <th scope="col">subject</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {teacherlist.map((item,index)=>
                    <tr key={item.id}>
                    
                    <td>{item.teachername}</td>
                    <td>{item.subject}</td>
                    
                  </tr>
                  )}
                  
                  
                </tbody>
              </table>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherList;
