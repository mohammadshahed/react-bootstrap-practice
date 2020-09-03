import React from 'react';

const Contact = () => {
    return (
        <div className='jumbotron text-center'>
            <h1 className='display-2'>Contact Us and Hire Us</h1>
            <div className="col-md-5 mx-auto">
                <input className='mt-2 form-control' placeholder='Your Name' type="text"/>
                <input className='mt-2 form-control' placeholder='Your Email' type="text"/>
                <input className='mt-2 form-control' placeholder='Your Phone' type="text"/>
                <input className='mt-2 form-control' placeholder='Your Address' type="text"/>
                <input className='mt-2 btn btn-success d-block mx-auto' value='Submit Data' type="submit"/>
            </div>
        </div>  
    );
};

export default Contact;