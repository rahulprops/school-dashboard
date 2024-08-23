import React, { useEffect, useState } from 'react'
import './other.css'
import addoter from '../../images/addstudnet.png'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

import { app } from '../../Firebase'

const Other = () => {
  const [name,setName]=useState('')
  const [cate,setCate]=useState('')
  const [otherlist,setOtherlist]=useState([])
  // submit data from using form
  const handleOther= async (event)=>{
    event.preventDefault()
      const db=getFirestore(app)
      try{
          await addDoc(collection(db, 'others'),{
            name,
            cate
          })
          alert("data send successfuly")
          setName('')
          setCate('')
      }catch(error){console.log(error)}
  }
  // end submit data
  // start fetch data from firestore
     const fetchOther= async()=>{
         const db=getFirestore(app)
         const otherCollection=collection(db,'others')
         const otherSnapshot=await getDocs(otherCollection)
         const otherList=otherSnapshot.docs.map(doc =>({
           id:doc.id,
           ...doc.data()

         }))
         setOtherlist(otherList)
     }
     useEffect(()=>{
      fetchOther();
     },[])
    //  end fetch data from firestore
  return (
    <>
        <div className='mycontainer'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 add-other">add other</div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-5">
              <img src={addoter} alt="" className="img img-fluid" />
            </div>
            <div className="col-md-7">
              <form method='post' onSubmit={handleOther}>
                
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Add category
                  </label>
                  <input
                    type="text"
                    value={cate}
                    onChange={(e)=>{setCate(e.target.value)}}
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
        {/* display data */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 add-other">display data</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>add section</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
            {otherlist.map((item,index)=>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.cate}</td>
              <td>actions</td>
            </tr>
            )}
            </tbody>
            </table>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        {/* dispay data end */}
        </div>
    </>
  )
}

export default Other