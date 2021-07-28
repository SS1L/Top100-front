/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import authService from '../server/authService';
import './style.css';

export default function Login(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const required = (value) => {
    if (!value) {
      return (
        <div>
          This field is required
        </div>
      );
    }
  };

  const validateEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div>
          This is not a valid email.
        </div>
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      authService.login({ email, password })
        .then(() => {
          // need fix;
          // props.history.push('/signup');
          window.location.href = '/signup';
        },
        (error) => {
          const resMessage = (error.response
            && error.response.data
            && error.response.data.message)
            || error.message
            || error.toString();

          setLoading(false);
          setMessage(resMessage);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Sign In</h1>
      <div className="form-section">
        <Form className="form" onSubmit={handleSubmit} ref={form}>
          <div className="form-item">
            <label htmlFor="email" className="form-label">
              Email Adress
            </label>
            <Input
              id="email"
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              validations={[required, validateEmail]}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Input
              id="password"
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              validations={[required]}
            />
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <button type="submit" className="btn btn-submit" ref={checkBtn}>
            SIGN IN
          </button>
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
        <div>
          <a className="section-link" href="/">Forgot email?</a>
        </div>
        <button type="button" className="btn btn-redirect">CREATE ACCOUNT</button>
      </div>
    </div>
  );
}
