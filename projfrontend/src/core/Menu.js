import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import {getCourse} from "./helper/coreapicalls"

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#2ecc72" };
    } else {
      return { color: "#FFFFFF" };
    }
  };

  const Menu = ({ history }) => {

    

    return(  
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <span class="mx-auto d-xl-none d-lg-none"><a class="navbar-brand" href="#">Vigo</a></span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav float-left mx-auto ">
                <li class="nav-item left d-sm-block">
                    <a class="nav-link" href="#">Categories</a>
                </li>
                <li class="nav-item left ">
                    <a class="nav-link" href="#">Courses</a>
                </li>
                <li class="nav-item left ">
                    <a class="nav-link" href="#">Be an Instructor</a>
                </li>
                

                <li class="nav-item right d-xl-none d-lg-none">
                    <a class="nav-link" href="#"><Link to="/signup">SignUp</Link></a>
                </li>
                <li class="nav-item right d-xl-none d-lg-none">
                    <a class="nav-link" href="#"><Link to="/signin">SignIn</Link></a>
                </li>
            </ul>
            <span class="mx-auto d-none d-lg-block"><a class="navbar-brand" href="#">Vigo</a></span>
            <ul class="navbar-nav float-right mx-auto">
                <li class="nav-item right d-none d-lg-none d-lg-block">
                <Link to="/signup"><button className="btn btn-outline-warning">SignUp</button></Link>
                </li>
                <li class="nav-item right d-none d-lg-none d-lg-block">
                <Link to="/signin"><button className="btn btn-outline-success">SignIn</button></Link>
                </li>
            </ul>
        </div>
        </nav>
      )};
   

      

  
  export default withRouter(Menu);
  