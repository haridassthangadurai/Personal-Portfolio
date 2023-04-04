import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './portfolioedu.css'
import kgisl from './Shadow Effect.png'
import school from './Premium Vector _ Kid reading book silhouette against moon.jpg'
import college from './Premium Vector _ Man reading book logo template design.jpg'

export function Portedu(){
    return(
        <div className="porteduboby" id="pedu">
            <div className="container-fluid edurow">
                <div className="row p-5 ">
                <div className="col-lg-3"></div>
                    <div className="col-lg-6 P-5 portedudiv row">
                        <div className="col-lg-6 p-4">
                            <img src={kgisl} className=" eduimg col-lg-8"/>  
                        </div>
                        <div className="col-lg-6 pt-4 eduname my-3">
                            <h5>Vidyagar college of arts and science</h5>
                            <h5 className="edufont">udumalpet,Tiruppur-642132</h5>
                            <h5>B.COM(CA):-53%</h5>
                        </div>
                    
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 P-5 portedudiv row ">
                        <div className="col-lg-6 p-4">
                            <img src={college} className="eduimg col-lg-8"/>  
                        </div>
                        <div className="col-lg-6 eduname pt-4 my-3">
                            <h5>Government Higher Secondary School</h5>
                            <h5 className="edufont">Jallipatty,udumalpet,Tiruppur-642112</h5>
                            <h5>HSL:-61%</h5>
                        </div>
                    
                    </div>
                    <div className="col-lg-3"></div>
                    
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 P-5 mb-5 portedudiv row ">
                        <div className="col-lg-6 p-4">
                            <img src={school} className="eduimg col-lg-8"/>  
                        </div>
                        <div className="col-lg-6 pt-4 eduname my-3 ">
                            <h5>Government Higher Secondary School</h5>
                            <h5 className="edufont">Jallipatty,udumalpet,Tiruppur-642112</h5>
                            <h5>SSCL:-75%</h5>
                        </div>
                    
                    </div>
                    <div className="col-lg-3"></div>
                    
                </div>
            </div>

        </div>



    );
}