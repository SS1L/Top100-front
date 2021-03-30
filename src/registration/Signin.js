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
            pass: ''
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = () => {
        console.log(this.setState)
    }

    render() {
        return (
            <div className='section'>
                <h1 className='title'>Sign In</h1>
                <div className='form-section'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <label>
                                <div className='form-label'>
                                    Email Adress
                            </div>
                            </label>
                            <div>
                                <input className='form-input' name='email' value={this.state.email} onChange={this.handleUserInput} type='email' />
                            </div>
                        </div>
                        <div className='form-item'>
                            <label>
                                <div className='form-label'>
                                    Password
                            </div>
                            </label>
                            <div>
                                <input className='form-input' name='pass' value={this.state.pass} onChange={this.handleUserInput} type='password' />
                            </div>
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