import React from 'react';
import img40 from './Screenshot (8).png'
import img41 from './foodhtml.png'
import img42 from './sign.png'




export function Html(){
    return(
        <div className='bg-dark'>
            <div className='container-fluid'>
                <div className='row  '>

        <img src={img40} className='col-lg-4 mt-3 imghover'/>
        <img src={img42} className='col-lg-4 mt-3 imghover'/>
        <img src={img41} className='col-lg-8 mt-3 imghover'/>
       
       
    
        
        
       
        </div>
        </div>
</div>
    )
   
    }