import React, { Component } from "react";
import './style.css'
import axios from 'axios';
import { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPass, setRepPass] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        console.log(email, password, repPass)
    }

    return (
        <div className='section'>
            <h1 className='title'>Create Account</h1>
            <div className='form-section'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-item'>
                        <label className='form-label'>
                            Email Adress
                        </label>
                        <input className='form-input'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {
                            submitted && !email &&
                            <div className='help-block'> Email must be required</div>
                        }
                    </div>
                    <div className='form-item'>
                        <label className='form-label'>
                            Password
                        </label>
                        <input className='form-input'
                            name='pass'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                        />
                        {
                            submitted && !password &&
                            <div className='help-block'>Password must be required</div>
                        }
                    </div>
                    <div className='form-item'>
                        <label className='form-label'>
                            Repeat Password
                        </label>
                        <input className='form-input'
                            name='repPass'
                            value={repPass}
                            onChange={(e) => setRepPass(e.target.value)}
                            type='password'
                        />
                        {
                            submitted && !repPass &&
                            <div className='help-block'>Repeat password must be required </div>
                        }
                    </div>
                    <div className='form-item'>
                        <button className='btn btn-submit'>CREATE ACCOUNT</button>
                    </div>
                </form>
                <button className='btn btn-redirect'>SING IN</button>
            </div>
        </div>
    )
}