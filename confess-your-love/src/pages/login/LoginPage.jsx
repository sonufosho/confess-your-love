import { NavLink } from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './LoginPage.css';

function LoginPage() {
  return (
    <>
      <Header />

      <div className="login-page">
        <p className="login-title">Welcome Back</p>
        <p className="login-subtitle">Login to access your account</p>

        <div className="input-container">
          <label label className="login-label">Username:</label>
          <input
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <label label className="login-label">Password:</label>
          <input
            type="text"
            placeholder="Enter your password"
          />
        </div>

        <button className="button-primary login-button">Sign Up</button>

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