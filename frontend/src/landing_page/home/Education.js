import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
        <div className='row'>
        <div className='col-6'>
           <img src='media/images/education.svg' style={{width:"70%"}}/>     
        </div> 
           
       
           <div className='col-6'>
           <h1 className='mb-3 fs-2'> Free and Open Market Education </h1>
           <p className='mt-5'>Varsity the largest online stock market education book in the world covering everything from basics to advnaced trading.</p>
           <a href=''style={{textDecoration:"none"}} >Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           <p className='mt-5'>Trading Q&A, the most active trading and investment community in india for all your market related queries.</p>
           <a href=''style={{textDecoration:"none"}} >Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

           </div> 
        </div>
    </div>
     );
}

export default Education;