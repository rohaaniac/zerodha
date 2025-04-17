import React from 'react';
function Hero() {
    return ( 
        // container fluid class in bootstrap removes the margin for container
        
        <section className="container-fluid" id="supportzero">
            <div className="row p-2" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
         </div>
        <div className="row p-3 m-3" >
        <div className="col-6 p-3" >
            <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1><br/>
            <input placeholder='Eg. How do I activate F&O'></input> <br/><br/>
            <a href="">Track account opening</a>

            <a href="">Track segment activation</a>

            <a href="">Intraday margins</a>

            <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3 " > 
            <h1 className='fs-4'>Featured</h1>
            <ol style={{lineHeight:"2.0"}}>
                <li>
                <a href="">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a>
                </li>
                <li><a href="">Trading holiday on account of Dr. Baba Saheb Ambedkar Jayanti on April 14, 2025</a>
                </li>
            </ol>
            </div>
        </div>
        </section>
      

    
     );
}

export default Hero;