import React from 'react'
import Home from '../../Pages/Home/Home'
import './dashboard.css'
import Card from '../Card/Card'

const Dashboard = () => {
  return (
    <>
      <div className=" mycontainer">
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-4"><Card/></div>
            <div className="col-md-4"><Card/></div>
            <div className="col-md-4"><Card/></div>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Dashboard