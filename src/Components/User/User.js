import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';

const User = () => {
const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then(res=> res.json())
        .then(data=> setUsers(data.results))
        .catch(error=> console.log(error))
    },[])

const [cart, setCart] = useState([])
const selectedUser =(user)=>{
    const totalUser =[...cart, user]
        setCart(totalUser)
}
    return (
         <div className='container'>
            <div className="row">
                <div className="col-md-9">
                    <h4 className='text-center'>All Users</h4><hr></hr>
                    <div className="row">
                        {
                            users.map(user=>               
                                <div className="col-md-6 mb-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className='text-center'>{user.name.first}</h3><hr></hr>
                                            <img className='d-block mx-auto rounded shadow img-thumbnail my-3' height='150' width='150' src={user.picture.large} alt=""/>
                                            <p className='lead m-0'>Full Name: {user.name.title} {user.name.first} {user.name.last} </p>                                    
                                            <p className='lead m-0'>Gender: {user.gender}</p>                                    
                                            <p className='lead m-0'>Email: {user.email}</p>                                    
                                            <p className='lead m-0'>Phone: {user.phone}</p>  <hr></hr>   
                                            <button onClick={()=>selectedUser(user)} className='btn btn-warning d-block mx-auto'><FontAwesomeIcon icon={faUserPlus} /> Select {user.name.first}</button>                               
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <h4 className='text-center'>Selected Users</h4><hr></hr>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div> 
    );
};

export default User;