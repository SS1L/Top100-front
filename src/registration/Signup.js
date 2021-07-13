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
            submitted: false,
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


    render() {
        // console.log(this.state)
        const { email, nickname, pass, repPass, submitted } = this.state;
        return (
            <div className='section'>
                <h1 className='title'>Create Account</h1>
                <div className='form-section'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <label className='form-label'>
                                Email Adress
                            </label>
                            <input className='form-input' name='email' value={this.state.email} onChange={this.handleUserInput} />
                            {submitted && !email &&
                                <div className='help-block'>Email is required</div>
                            }
                        </div>
                        <div className='form-item'>
                            <label className='form-label'>
                                Nickname
                            </label>
                            <input className='form-input' name='nickname' value={this.state.nickname} onChange={this.handleUserInput} type='text' />
                            {submitted && !nickname &&
                                <div className='help-block'>Nickname is required</div>
                            }
                        </div>
                        <div className='form-item'>
                            <label className='form-label'>
                                Password
                            </label>
                            <input className='form-input' name='pass' value={this.state.pass} onChange={this.handleUserInput} type='password' />
                            {submitted && !pass &&
                                <div className='help-block'>Pass is required</div>
                            }
                        </div>
                        <div className='form-item'>
                            <label className='form-label'>
                                Repeat Password
                            </label>
                            <input className='form-input' name='repPass' value={this.state.repPass} onChange={this.handleUserInput} type='password' />
                            {submitted && !repPass &&
                                <div className='help-block'>RepPass is required</div>
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
}