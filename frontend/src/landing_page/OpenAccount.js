import React from 'react';
function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
        {/* each row hava a capacity of col-12 */}
        <div className='row text-center'>
            {/* img is in public folder we can use direct syntax regardless of using it as a component */}
          <h1 className='mt-5'>
          Open a Zerodha Account 
          </h1>
          <p>Modern platform and apps, Rs.0 Investments, and flat Rs. 20 intraday and F&O trades</p>
          <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}} >Sign Up Now</button> 
        
        </div>




    </div>
     );
}

export default OpenAccount;