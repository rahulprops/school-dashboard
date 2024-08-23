import React, { useState } from 'react'
import './teacher.css'
import addteacher from '../../images/addstudnet.png'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../../Firebase'

const Teacher = () => {
  const [teachername,setTeachername]=useState('')
  const [subject,setSubject]=useState('')
  const handleteacher= async (event)=>{
     event.preventDefault()
     const db=getFirestore(app)
   try
   {
    await addDoc(collection(db, 'teachers'),{
      teachername,
      subject
    })
    alert("data send successfuly")
    setTeachername('')
    setSubject('')
   }
   catch(error)
   {
    console.log(error)
    
   }
  }
  return (
    <>
        <div className='mycontainer'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 add-teacher">add teacher</div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-5">
              <img src={addteacher} alt="" className="img img-fluid" />
            </div>
            <div className="col-md-7">
              <form method='post' onSubmit={handleteacher}>
                
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={teachername}
                    onChange={(e)=>{setTeachername(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Add Subject 
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                
                  
                
                <button type="submit" class="btn btn-primary ">Add Teacher</button>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Teacher