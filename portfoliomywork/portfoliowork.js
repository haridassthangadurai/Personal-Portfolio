import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './portfoliowork.css'
import { Link } from "react-router-dom";
import mywork1 from "./The Must Read HTML vs CSS Infographic _ Coding Dojo Blog.jpeg"
import mywork2 from "./3 JavaScript Libraries to Watch in 2015_ React_js, Meteor, Rendr.png"
import mywork3 from "./Digital Art (Results) – 12 Hobby Challenge Month 2 - Public Generalist.jpeg"
import mywork4 from "./corel draw 2018.jpeg"

export function Porwork(){
    return(
      
          
        <div className="porworkbody" id="pskills">
        <div className="container-fluid edurow">
            <div className="row p-5 ">
            <div className="col-lg-3"></div>
                <div className="col-lg-6 P-5 ml-1 portedudiv row">
                    <div className="col-lg-6 p-4">
                        <img src={mywork1} className=" eduimg col-lg-8"/>  
                    </div>
                    <div className="col-lg-6 pt-4 eduname my-3">
                    <h1 className="porworktext2  portworkdiv2">CSS</h1>
                        <h5>Click here to View my work</h5>
                        <Link to="/Css" className="non text-primary" target="_blank"><button className="px-4">Click</button></Link>
                    </div>
                </div>
                <div className="col-lg-3"></div>

                <div className="col-lg-3"></div>
                <div className="col-lg-6 P-5 ml-1 portedudiv row ">
                    <div className="col-lg-6 p-4">
                        <img src={mywork2} className="eduimg col-lg-8"/>  
                    </div>
                    <div className="col-lg-6 eduname pt-4 my-3">
                    <h1 className="porworktext3  portworkdiv3">React</h1>
                        <h5>Click here to View my work</h5>
                        <Link to="/Hello" className="non text-light"> <button className="px-4">Click</button></Link>
                    </div>
                
                </div>
                <div className="col-lg-3"></div>
                
                <div className="col-lg-3"></div>
                <div className="col-lg-6 P-5 mb-5 ml-1 portedudiv row ">
                    <div className="col-lg-6 p-4">
                        <img src={mywork3} className="eduimg col-lg-8"/>  
                    </div>
                    <div className="col-lg-6 pt-4 eduname my-3 ">
                    <h1 className="porworktext4 portworkdiv4">Photoshop</h1>
                        <h5>Click here to View my work</h5>
                        <Link to="/gd/Photoshop" className="non text-primary" target="_blank">   <button className="px-4">Click</button></Link>
                    </div>
                
                </div>
                
                <div className="col-lg-3"></div>

                <div className="col-lg-3"></div>
                <div className="col-lg-6 P-5 mb-5 ml-1 portedudiv row ">
                    <div className="col-lg-6 p-4">
                        <img src={mywork4} className="eduimg col-lg-8"/>  
                    </div>
                    <div className="col-lg-6 pt-4 eduname my-3 ">
                    <h1 className="porworktext5 portworkdiv5">CorelDraw</h1>
                        <h5>Click here to View my work</h5>
                        <Link to="/Coral" className="non text-success" target="_blank">    <button className="px-4 ">Click</button></Link>
                    </div>
                
                </div>
                
                <div className="col-lg-3"></div>
                
            </div>
        </div>

    </div>
    

    )
}