import React, { useState } from "react";
import "./student.css";
import addstudnet from '../../images/addstudnet.png'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../Firebase";
const Student = () => {
  const [fullname,setFullname]=useState('')
  const [fathername,setFathername]=useState('')
  const [classstu,setClassstu]=useState('')
  const [phone,setPhone]=useState(null)
  const handlesendata= async (event)=>{
        event.preventDefault()
        // console.log(fullname , phone , fathername ,classname)
        const db=getFirestore(app)
        try
        {
           await addDoc(collection(db,'students'),{
            fullname,
            phone,
            fathername,
            classstu
           }) 
           alert('data sent succssfully');
          //  reset form data necessary
          setFullname('')
          setFathername('')
          setClassstu('')
          setPhone('')
        }
        catch(error){
          console.log(error)
        }
  }
  return (
    <>
      <div className="mycontainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 add-stu">add student</div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-5">
              <img src={addstudnet} alt="" className="img img-fluid" />
            </div>
            <div className="col-md-7">
              <form method="post" onSubmit={handlesendata}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    full Name
                  </label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e)=>{setFullname(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    phone 
                  </label>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Father Name
                  </label>
                  <input
                    type="text"
                    value={fathername}
                    onChange={(e)=>{setFathername(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Class
                  </label>
                  <input
                    type="text"
                    value={classstu}
                    onChange={(e)=>{setClassstu(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <button type="submit" class="btn btn-primary ">Add Student</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
