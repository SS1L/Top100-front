import React, { useState } from 'react';
import registration from '../server/Registration';


export default function Singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPass, setRepPass] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    await registration({ email, password, repPass });
  };

  return (
    <div className="section">
      <h1 className="title">Create Account</h1>
      <div className="form-section">
        <form className="form" onSubmit={handelSubmit}>
          <div className="form-item">
            <label className="form-label">
              Email Adress
            </label>
            <input
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label className="form-label">
              Password
            </label>
            <input
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="form-item">
            <label className="form-label">
              Repeat Password
            </label>
            <input
              className="form-input"
              name="repPass"
              value={repPass}
              onChange={(e) => setRepPass(e.target.value)}
              type="password"
            />
            {/* {
                        submitted && !repPass
                        && <div className="help-block">Repeat password must be required </div>
                    } */}
          </div>
          <div className="form-item">
            <button type="submit" className="btn btn-submit">CREATE ACCOUNT</button>
          </div>
        </form>
        <button type="submit" className="btn btn-redirect">SING IN</button>
      </div>
    </div>
  );
}
