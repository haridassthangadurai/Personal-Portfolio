import React from "react";
import Hari from './Untitled-2.png'
import Png from './pngwing.com.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './protfolioabout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudArrowDown} from '@fortawesome/free-solid-svg-icons'
export function Proabout(){
   return(   
      <div className="protfololiobody" id="pabout">
        <div className="container-fluid">
            <div className="row ">
            <div className="col-lg-6 proaboutname">
               <div className="mt-5 ">
                 <h4 className=" col-lg-12 proaboutdis mb-1">Discover</h4>
                  <h3 className="text-light text-decoration-underline col-lg-12">About ME</h3>
                  <p className="text-light ml-3">My name is Haridass Thangadurai ,I'm a Front-End Developer based in Coimbatore, India. and I'm very passionate and dedicated to my work.I have skilled Front-End Tools and Graphic designer Tools.I have acquired the skills necessary to build great and premium websites.Also i'm Skilled in Marketing,Retaile and Hotel Sectors. </p> 
                  <button className="proaboutbtn"> 
                  <a className="button" href="https://drive.google.com/file/d/1c-yavP4MUf3KxBbYOnkgpw7uGKtAdW4c/view?usp=share_link" download target="_blank" > DOWNLOAD CV <FontAwesomeIcon icon={faCloudArrowDown} /></a></button>                    
               </div>
            </div>
            <div className="col-lg-6 proaboutphoto">
               <img src={Hari} className="col-lg-7 mt-5 prohari" />
               <img src={Png} className="col-lg-8  mt-5 propng"/>
            </div>
            </div>
         </div>
      </div>
    





   );



}