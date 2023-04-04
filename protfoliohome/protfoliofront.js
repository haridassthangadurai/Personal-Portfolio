import React,{window} from "react";
import './protfoliofront.css'
import 'bootstrap/dist/css/bootstrap.css'
import hill1 from './hill1.png'
import hill2 from './hill2.1.png'
import hill3 from './hill3.png'
import hill4 from './hill4.png'
import hill5 from './hill5.png'
import leag from './leaf.png'
import plant from './plant.png'
import tree from './tree.png'
import 'bootstrap/dist/css/bootstrap.css'
export function Profront(){
  // let text=document.getElementById('text');
  // let leaf=document.getElementById('leaf');
  // let hill1=document.getElementById('hill1');
  // let hill4=document.getElementById('hill4');
  // let hill5=document.getElementById('hill5');
  // window.useEventListener('scroll',()=>{
  //   let value=window.scrollY;
  //    text.style.marginTop=value*2.5 +'px';
  //    leaf.style.top=value*-1.5 + "px";
  //    leaf.style.left=value*1.5 + "px";
  //    hill5.style.left=value*1.5 + "px";
  //    hill4.style.left=value*-1.5 + "px";
  //    hill1.style.top=value*1.5 + "px";
  // })
  
  return(
      <>
      <div className="profrontbody"id="/">
        <div className="profrontimg">
           <img src={hill1 } className="hill1"/>
           <img src={hill2 }className="hill2" />
           <img src={hill3 }className="hill3"/>
           <img src={hill4 } className="hill4"/>
           <img src={hill5 } className="hill5"/>
           <h1 className="text text-center">I am </h1>
           <h1 className="harihome">Haridass</h1>
          
           <img src={tree }className="tree"/>
           <img src={plant }/>
           <img src={leag } id="leaf"/>
           
        </div>
      </div>
      
      
      
      
      
      
      </>




  )

}