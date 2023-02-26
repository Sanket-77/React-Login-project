import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

export default function Login1() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password });

      const navigate = useNavigate()

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const postHandeler = () => {
        console.log({ email, password });
        axios.post('https://reqres.in/api/login', { email: email, password: password })
            .then((result) => {
                console.log(result.data)
                alert('sucessfull')
                localStorage.setItem('token', result.data.token)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                alert('Error')
            })
    }

    return (
        <>
            <h1> Login </h1> <br />
            <input type="email" value={email} onChange={handleEmail}  placeholder={'Email'}/>
            <br /> <br />
            <input type="password" value={password} onChange={handlePassword} placeholder={'Password'} /> 
            <br /> <br />
            <button onClick={postHandeler}>Submit</button>

        </>
    )
}
