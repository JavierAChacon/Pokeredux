import React from 'react';
import { changeName } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import '../styles/login.css'

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
            
            <div className='professor'>
                <img src="./assets/images/profesor.webp" alt="professor oak" />
            </div>

            <div  className='name'>
                <h1>What is your name:</h1>
                
                <form className='input'>
                    <input 
                        type="text"
                        value = {userName}
                        onChange = {e => setUserName(e.target.value)}
                    />
                    <button onClick={dispatchUserName}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Login;