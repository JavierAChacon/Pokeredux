import React from 'react';
import { changeName } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const dispatch = useDispatch()

    const [userName, setUserName] = useState("")

    const navigate = useNavigate()

    const dispatchUserName = () => {
        dispatch(changeName(userName))
        navigate('/pokedex')
    }

    return (
        <div className='login'>
            <h1>UserInput</h1>
            <input 
                type="text"
                value = {userName}
                onChange = {e => setUserName(e.target.value)}
            />
            <button onClick={dispatchUserName}>Send</button>
        </div>
    );
};

export default Login;