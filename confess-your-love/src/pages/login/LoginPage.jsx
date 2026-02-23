import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';
import useAuthStore from '../../store/useAuthStore';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { login, isLoggingIn, authUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser && authUser.username) {
      navigate(`/${authUser.username}`);
    }
  }, [authUser, navigate]);

  return (
    <>
      <Header />

      <div className="login-page">
        <p className="login-title">Welcome Back</p>
        <p className="login-subtitle">Login to access your account</p>

        <div className="input-container">
          <label label className="login-label">Username</label>
          <input
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <label label className="login-label">Password</label>
          <input
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="button-primary login-button"
          onClick={() => login(formData)}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? 'Logging in...' : 'Log in'}
        </button>

        <p className="signup-text">
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