import React from 'react';
import img21 from './Screenshot (7).png'
import img22 from './Screenshot (17).png'
import img23 from './Screenshot (18).png'
import img24 from './Screenshot (21).png'
import img25 from './Screenshot (6).png'


export function Css(){
    return(
        <div className='bg-dark'>
            <div className='container-fluid'>
                <div className='row  '>

        <img src={img21} className='col-lg-4 mt-3 imghover'/>
        <img src={img24} className='col-lg-4 mt-3 imghover'/>
        <img src={img23} className='col-lg-4 mt-3 imghover'/>
        <img src={img22} className='col-lg-4 mt-3 imghover'/>
        <img src={img25} className='col-lg-4 mt-3 imghover'/>
        
        
       
        </div>
        </div>
</div>
    )
   
    }