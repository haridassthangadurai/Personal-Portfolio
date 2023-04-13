import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './portfoliowork.css'
import html from './Adding Application Notifications With Kendo UI Core.png'
import css from './css.jpg'
import Reactjs from  './rect.jpg'
import { Link } from "react-router-dom";
export function Porwork(){
    return(
          <div className="porworkbody" id="pskills">
            <div className="container">
            <div className="row justify-content-between ml-3">
                <div className="col-lg-12 my-5 row ">
                <div className="col-lg-5 m-4   portworkdiv2">
                <Link to="/Css" className="non text-primary" target="_blank"> <h1 className="porworktext">CSS</h1></Link>
               </div>
               <div className="col-lg-5 m-4  portworkdiv3">
               <Link to="/Hello" className="non text-light"><h1 className="porworktext">ReactJS</h1></Link>
                </div>
            </div>
            <div className="col-lg-12 my-3 row">
                <div className="col-lg-5 m-4 sm-mr-4 portworkdiv4">
                <Link to="/gd/Photoshop" className="non text-primary" target="_blank">  <h1 className="porworktext">Photoshop</h1></Link>
                </div>
                <div className="col-lg-5 m-4 sm-mr-4  portworkdiv5">
                <Link to="/Coral" className="non text-success" target="_blank"> <h1 className="porworktext">CorelDraw</h1></Link>
               </div>
             
            </div>
            </div>
          </div>
          </div>


    )
}