import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './protfoliomenu.css'
import { Link as Scrolllink } from "react-scroll";
export function Promenu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Scrolllink to=''><h1 className="nav-brand  promenuhead">Welcome</h1></Scrolllink>
                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse text-white ml-5" id="navbarNav">
                                 <ul className="navbar-nav">
                                    <Scrolllink activeClass="active" to='/' spy={true} smooth={true} offset={0} duration={500} className="non"><li className="nav-item active ml-5 promenuhead">Home </li></Scrolllink>
                                    <Scrolllink activeClass="active" to='pabout' spy={true} smooth={true} offset={0} duration={500}   className="non"><li className="nav-item active ml-5 promenuhead">About</li></Scrolllink>
                                    <Scrolllink activeClass="active" to='pcer' spy={true} smooth={true} offset={0} duration={500}   className="non"><li className="nav-item active ml-5 promenuhead">Certifications</li></Scrolllink>
                                    <Scrolllink activeClass="active" to='pedu'spy={true} smooth={true} offset={0} duration={500}   className="non"><li className="nav-item active ml-5 promenuhead">Education</li></Scrolllink>
                                    <Scrolllink activeClass="active" to='pskills' spy={true} smooth={true} offset={0} duration={500}   className="non"><li className="nav-item active ml-5 promenuhead">Skills</li></Scrolllink>
                                    <Scrolllink activeClass="active" to='pcon'spy={true} smooth={true} offset={0} duration={500}   className="non"><li className="nav-item active ml-5 promenuhead">Contact</li></Scrolllink>
                                    
                                </ul>
                             </div>

        </nav>
        </>


    );
}
