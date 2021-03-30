import React, { Component } from "react";
import './style.css'
import axios from 'axios';
import { useState } from 'react';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            nickname: '',
            pass: '',
            repPass: '',
            // emailError: '',
            // passError: '',
            // repPassError: ''
        }
        this.error = {
            emailError: 'Error'
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    handleValidation = () => {

    }

    // validate = () => {
    //     let emailError = '';
    //     let repPassError = '';
    //     if (!this.state.email.includes('@')) {
    //         emailError = 'Invalid email';
    //         this.setState({ emailError });
    //         return false;
    //     }

    //     if (this.state.pass !== this.state.repPass) {
    //         repPassError = "Passwords don't match";
    //         this.setState({ repPassError });
    //         return false;
    //     }

    //     return true;
    // }

    handleSubmit = (event) => {
        // event.preventDefault()
        // const isValid = this.validate();

        // if (isValid) {
        //     console.log(this.state)
        //     console.log('all work')
        // }
        const data = this.state;
        axios.post('http://localhost:4000/reg', data);
        console.log(data)

    };


    render() {
        // console.log(this.state)
        return (
            <div className='section'>
                <h1 className='title'>Create Account</h1>
                <div className='form-section'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <label>
                                <div className='form-label'>
                                    Email Adress
                            </div>
                            </label>
                            <div>
                                <input className='form-input' name='email' value={this.state.email} onChange={this.handleUserInput} />
                            </div>

                            {this.error.emailError}
                        
                        </div>
                        <div className='form-item'>
                            <label>
                                <div className='form-label'>
                                    Nickname
                            </div>
                            </label>
                            <div>
                                <input className='form-input' name='nickname' value={this.state.nickname} onChange={this.handleUserInput} type='text' />
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
                        <div className='form-item'>
                            <label>
                                <div className='form-label'>
                                    Repeat Password
                            </div>
                            </label>
                            <div>
                                <input className='form-input' name='repPass' value={this.state.repPass} onChange={this.handleUserInput} type='password' />
                            </div>
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
}