import React, { useState } from 'react';
import login from '../server/Login';
import './style.css';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="section">
      <h1 className="title">Sign In</h1>
      <div className="form-section">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="email" className="form-label">
              Email Adress
            </label>
            <input
              id="email"
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="form-item">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button type="submit" className="btn btn-submit">SIGN IN</button>

        </form>
        <div>
          <a className="section-link" href="/">Forgot email?</a>
        </div>
        <button type="button" className="btn btn-redirect">CREATE ACCOUNT</button>
      </div>
    </div>
  );
}
