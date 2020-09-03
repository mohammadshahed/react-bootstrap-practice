import React from 'react';

const Cart = (props) => {
    const totalSelected = props.cart.length
    const totalSalary = props.cart.reduce((initial, user)=>initial + user.location.postcode, 0)
    console.log(props.cart)
    return (
        <div>
            <p className='lead m-0'>User Selected: {totalSelected}</p>
            <p className='lead m-0'>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Cart;