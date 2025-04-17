import React from 'react';
function Brokerage() {
    return ( 
        <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href=""style={{textDecoration:"none"}}><h3 className='fs-6'> Brokerage calculator </h3></a>
        <ul style={{textAlign:"left", lineHeight:"2.5", fontSize: "12px"}} className="text-muted">
           <li>Call &Trade and RMS auto square off: Additional charges applied.</li> 
           <li>Digital contract notes will be sent via email</li>
           <li>Physical copied of contract notes, if required shall be charged</li>
           <li>T&C apply *</li>
        </ul>
        
        </div>
        <div className="col-4 p-4">
          <a href=""style={{textDecoration:"none"}}><h3 className='fs-5'> List of charges </h3></a>
        </div>
       </div>
  
     );
}

export default Brokerage;