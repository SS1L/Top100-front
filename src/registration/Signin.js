import React, { Component } from "react";
import './style.css'
import axios from 'axios';
import { useState } from 'react';
import { render } from "@testing-library/react";


export default class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: '',
            submitted: false
        }

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }


    render() {
        const { email, pass, submitted } = this.state;
        return (
            <div className='section'>
                <h1 className='title'>Sign In</h1>
                <div className='form-section'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className={'form-item' + (submitted && !email ? '-has-error' : '')}>
                            <label htmlFor='email' className='form-label'>
                                Email Adress
                            </label>
                            <input className='form-input' name='email' value={email} onChange={this.handleUserInput} type='email' />
                            {submitted && !email &&
                                <div className='help-block'>Email is required</div>
                            }
                        </div>
                        <div className={'form-item' + (submitted && !pass ? '-has-error' : '')}>
                            <label htmlFor='pass' className='form-label'>
                                Password
                            </label>
                            <input className='form-input' name='pass' value={pass} onChange={this.handleUserInput} type='password' />
                            {submitted && !pass &&
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
}