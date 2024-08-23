import React from "react";
import "./aside.css";
import man from "../../images/man.jpeg";
import { Link } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import ViewListIcon from "@mui/icons-material/ViewList";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { blueGrey, red } from "@mui/material/colors";
const Aside = () => {
  return (
    <>
      <div className="contaier-fluid aside-main">
        <div className="row">
          <div className="col-md-12 main">
            <div className="profile">
              <img src={man} alt="" className="img img-fluid myimg" />
              <p className="text-color">rahul patel</p>
            </div>
            <ul className="mylist">
              <li className="mylistdata text-color">
                <SpaceDashboardIcon sx={{color:blueGrey[50]}} />
                <Link to="/" className="links">
                  Dashboard
                </Link>
              </li>
              <li className="mylistdata text-color">
                <AddToQueueIcon sx={{color:blueGrey[50]}} />
                <Link to="/student" className="links">student</Link>
              </li>
              <li className="mylistdata text-color ">
                <AddToQueueIcon sx={{color:blueGrey[50]}} />
                <Link to="/teacher " className="links">teacher</Link>
              </li>
              <li className="mylistdata text-color">
                <AddToQueueIcon sx={{color:blueGrey[50]}}/>
                <Link to="/other" className="links">other</Link>
              </li>
              <li className="mylistdata text-color">
                <ViewListIcon sx={{color:blueGrey[50]}}/> <Link to="/studentlist" className="links">Student List</Link>
              </li>
              <li className="mylistdata text-color">
                <ViewListIcon sx={{color:blueGrey[50]}} /> <Link to="/teacherlist" className="links">Teacher List</Link>
              </li>
              <li className="mylistdata text-color">
               <SystemUpdateAltIcon sx={{color:blueGrey[50]}}/> <Link className="links">update student</Link>
              </li>
              <li className="mylistdata text-color">
              <SystemUpdateAltIcon sx={{color:blueGrey[50]}}/> <Link className="links">update teacher</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
