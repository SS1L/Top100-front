import React, { Component } from "react";
import './style.css'
import axios from 'axios';
import { useState } from 'react';
import { render } from "@testing-library/react";


export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handelSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
    }
    return (
        <div className='section'>
            <h1 className='title'>Sign In</h1>
            <div className='form-section'>
                <form className='form' onSubmit={handelSubmit}>
                    <div className={'form-item'}>
                        <label htmlFor='email' className='form-label'>
                            Email Adress
                        </label>
                        <input className='form-input'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                        />
                        {
                            submitted && !email &&
                            <div className='help-block'>Email is required</div>
                        }
                    </div>
                    <div className={'form-item'}>
                        <label htmlFor='pass' className='form-label'>
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
                            <div className='help-block'>Pass is required</div>
                        }
                    </div>
                    <button className='btn btn-submit'>SIGN IN</button>

                </form>
                <div>
                    <a className='section-link' href='/'>Forgot email?</a>
                </div>
                <button className='btn btn-redirect'>CREATE ACCOUNT</button>
            </div>
        </div>
    )
}