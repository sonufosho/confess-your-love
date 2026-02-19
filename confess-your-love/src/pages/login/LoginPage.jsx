import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './LoginPage.css';

function LoginPage() {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field) => (e) => {
    setUserCredentials({ ...userCredentials, [field]: e.target.value });
  }

  const loginUser = async () => {
    if (!userCredentials.username || !userCredentials.password) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userCredentials, { withCredentials: true });
      const username = response.data.username;

      navigate(`/${username}`);

    } catch (err) {
      console.error("Signup error:", err);

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />

      <div className="login-page">
        <p className="login-title">Welcome Back</p>
        <p className="login-subtitle">Login to access your account</p>

        <div className="input-container">
          <label label className="login-label">Username</label>
          <input
            value={userCredentials.username}
            onChange={handleInputChange('username')}
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <label label className="login-label">Password</label>
          <input
            value={userCredentials.password}
            onChange={handleInputChange('password')}
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="button-primary login-button"
          onClick={loginUser}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </button>

        <p className="login-text">
          Don't have an account?
          <NavLink to="/signup" className="link-primary login-link">
            Create account
          </NavLink>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default LoginPage;