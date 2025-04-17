import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
        {/* each row hava a capacity of col-12 */}
        <div className='row text-center'>
            {/* img is in public folder we can use direct syntax regardless of using it as a component */}
          <h1 className='mt-5'>
          404 Not Found
          </h1>
          <p> Sorry, the page you're looking for doesn't exist &#x1F622; </p>
        </div>




    </div>
     );
}

export default NotFound;