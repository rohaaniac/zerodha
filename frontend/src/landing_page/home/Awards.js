import React from 'react';
function Awards () {
    return (  
        // mt-5 to give margin from top from the previous component
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>


                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retial order volumes in India daily by trading and investing in.</p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                            
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                        
                        </ul>
                        </div>
               
                    
                        <div className='col-6'>
                            <ul>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt Securities</p></li>
                            <li><p>Stocks & IPOs</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                    


                  
                </div>
            </div>
        </div>
    );
}

export default Awards ;