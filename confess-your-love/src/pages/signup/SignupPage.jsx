import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from "react-router";
import useAuthStore from '../../store/useAuthStore';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./SignupPage.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });
  const { signup, isSigningUp, authUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser && authUser.username) {
      navigate(`/${authUser.username}`);
    }
  }, [authUser, navigate]);

  return (
    <>
      <Header />

      <div className="signup-page">
        <p className="signup-title">Create Account</p>
        <p className="signup-subtitle">Sign up to get started</p>

        <div className="input-container">
          <label className="signup-label">Full name</label>
          <input
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            type="text"
            placeholder="James Bond"
          />
        </div>

        <div className="input-container">
          <label className="signup-label">Username</label>
          <input
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <label className="signup-label">Email</label>
          <input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            type="email"
            placeholder="jamesbond@gmail.com"
          />
        </div>

        <div className="input-container">
          <label className="signup-label">Password</label>
          <input
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            type="password"
            placeholder="Create a password"
          />
        </div>

        <button
          onClick={() => signup(formData)}
          disabled={isSigningUp}
          className="button-primary signup-button"
        >
          {isSigningUp
            ? <img src="loading-spinner.gif" className="signup-loading-spinner" />
            : 'Sign up'
          }
        </button>

        <p className="login-text">
          Already have an account?
          <NavLink to="/login" className="link-primary login-link">
            Log in
          </NavLink>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default SignupPage;