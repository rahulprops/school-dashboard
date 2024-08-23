import React, { useEffect, useState } from "react";
import "./studentlist.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../Firebase";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const db = getFirestore(app);
    const studentCollection = collection(db, "students");
    const studentSnapshot = await getDocs(studentCollection);
    const studentList = studentSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setStudents(studentList);
  };

  useEffect(() => {
 

    fetchStudents();
  }, []);

  return (
    <>
      <div className="mycontainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 add-stulist">Student List</div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Full Name</th>
                    <th scope="col">Father Name</th>
                    <th scope="col">Classstu</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((item,index)=>
                  <tr key={item.id}>
                    <td>{item.fullname}</td>
                    <td>{item.fathername}</td>
                    <td>{item.classstu}</td>
                    <td>{item.phone}</td>
                    <td>actions</td>
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

export default StudentList;
