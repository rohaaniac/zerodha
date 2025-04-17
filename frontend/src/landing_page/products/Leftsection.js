import React from 'react';
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5 '>
            <div className='row '>
                <div className='col-6'>
                    <img src={imageURL}/>   
                </div>
            
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{marginLeft:"50px"}}>TryDemo</a>
                        <a href={learnMore}>learnMore</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"></img></a>
                        <a href={appStore}><img src="media/images/appStoreBadge.svg"></img></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default LeftSection;