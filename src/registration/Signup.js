import React, { useRef, useState } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import authHeader from '../server/authHeader';
import authService from '../server/authService';

export default function Singup() {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPass, setRepPass] = useState('');
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

  const validatePassword = (value) => {
    if (value.length < 6 || value.length > 20) {
      return (
        <div>
          The password must be between 6 and 20 characters.
        </div>
      );
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      authService.registartion({ email, password, repPass })
        .then(() => {
          window.location.href = '/login';
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
      <h1 className="title">Create Account</h1>
      <div className="form-section">
        <Form className="form" onSubmit={handelSubmit} ref={form}>
          <div className="form-item">
            <label className="form-label">
              Email Adress
            </label>
            <Input
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              validations={[required, validateEmail]}
            />
          </div>
          <div className="form-item">
            <label className="form-label">
              Password
            </label>
            <Input
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              validations={[required, validatePassword]}
            />
          </div>
          <div className="form-item">
            <label className="form-label">
              Repeat Password
            </label>
            <Input
              className="form-input"
              name="repPass"
              value={repPass}
              onChange={(e) => setRepPass(e.target.value)}
              type="password"
            />
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          <div className="form-item">
            <button type="submit" className="btn btn-submit">CREATE ACCOUNT</button>
          </div>
        </Form>
        <button type="submit" className="btn btn-redirect">SING IN</button>
      </div>
    </div>
  );
}
