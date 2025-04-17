import React from 'react';
function Hero() {
    return ( 
    <div className='container p-5 mb-5'>
        {/* each row hava a capacity of col-12 */}
        <div className='row text-center'>
            {/* img is in public folder we can use direct syntax regardless of using it as a component */}
          <img className='mb-5' src='media/images/homehero.png' alt='heroimage'/>
          <h1 className='mt-5'>
          Invest in Everything  
          </h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
          <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}} >SignUp Now</button> 
        
        </div>




    </div> );
}

export default Hero;