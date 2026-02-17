import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./SignupPage.css";

function SignupPage() {
  const [userCredentials, setUserCredentials] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field) => (e) => {
    setUserCredentials({ ...userCredentials, [field]: e.target.value });
  };

  const signupUser = async () => {
    if (!userCredentials.fullName || !userCredentials.username || !userCredentials.email || !userCredentials.password) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('https://confess-your-love-backend.vercel.app/api/auth/register', userCredentials);
      const username = response.data.username;
      
      navigate(`/${username}`);

    } catch (err) {
      console.error("Signup error:", err);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="signup-page">
        <p className="signup-title">Create Account</p>
        <p className="signup-subtitle">Sign up to get started</p>

        <div className="input-container">
          <label className="signup-label">Full name</label>
          <input
            value={userCredentials.fullName}
            onChange={handleInputChange('fullName')}
            type="text"
            placeholder="James Bond"
          />
        </div>

        <div className="input-container">
          <label className="signup-label">Username</label>
          <input
            value={userCredentials.username}
            onChange={handleInputChange('username')}
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <label className="signup-label">Email</label>
          <input
            value={userCredentials.email}
            onChange={handleInputChange('email')}
            type="email"
            placeholder="jamesbond@gmail.com"
          />
        </div>

        <div className="input-container">
          <label className="signup-label">Password</label>
          <input
            value={userCredentials.password}
            onChange={handleInputChange('password')}
            type="password"
            placeholder="Create a password"
          />
        </div>

        <button
          onClick={signupUser}
          disabled={isLoading}
          className="button-primary signup-button"
        >
          {isLoading ? "Signing up..." : "Sign up"}
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