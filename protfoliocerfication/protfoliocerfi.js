import React from "react";
import './protfoliocerfi.css';
import procerimg from './css.jpg'
import procerimg1 from './metahtmlcss.jpg'
import procerimg2 from './procerimg2.jpg'
import procerimg3 from './procerimg3.jpg'
import 'bootstrap/dist/css/bootstrap.css'

export function Procerfi(){
    return(
        <>
        <div className="procerfibody" id="pcer">
        <div className="container">
                <div className="justify-content-between row">
                <div className="col-lg-3  procerfirow">
                    <div className="card protfoliocardbg py-2">
                    <img src={procerimg} className=" card-img-top  col-lg-12 procerfiimg"/>
                        <div className="card-body h-100 profoliocardbody">
                            <h4 className="card-title">CSS</h4>
                            <p className="card-text "> CSS - Full-Stack Developer and Web-Development Certifate from KGiSL</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3  procerfirow">
                    <div className="card protfoliocardbg py-2">
                    <img src={procerimg1} className=" card-img-top text-center col-lg-12 procerfiimg"/>
                        <div className="card-body profoliocardbody">
                            <h4 className="card-title  ">HTML and CSS </h4>
                            <p className="card-text mb-4">HTML and CSS in depth Certifate from Meta </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3  procerfirow">
                    <div className="card protfoliocardbg py-2">
                    <img src={procerimg2} className=" card-img-top text-center col-lg-12 procerfiimg"/>
                        <div className="card-body profoliocardbody">
                            <h4 className="card-title ">HTML</h4>
                            <p className="card-text">HTML in depth  -  Front-End Developer/   WebDevelopment from KGiSL</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3  procerfirow">
                    <div className="card protfoliocardbg py-2">
                    <img src={procerimg3} className=" card-img-top text-center col-lg-12 procerfiimg"/>
                        <div className="card-body profoliocardbody">
                            <h4 className="card-title">Front-End Development</h4>
                            <p className="card-text"> Front-End  Development Certifate from Meta</p>
                        </div>
                    </div>
                </div>

            </div>
                </div>
                </div>
                   </>

           

    );
}