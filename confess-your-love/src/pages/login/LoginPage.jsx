import { NavLink } from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './LoginPage.css';

function LoginPage() {
  return (
    <>
      <Header />

      <div className="login-page">
          <h1>Welcome back</h1>
          <h3>Login to access your account</h3>

        <div className="input-container">
          <span>Username:</span>
          <input
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <span>Password:</span>
          <input
            type="text"
            placeholder="Enter your password"
          />
        </div>

        <button className="auth-login-button">Login</button>

        <p className="signup">Don't have an account?
          <NavLink to="/signup" className="signup-link">
            Create account
          </NavLink>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default LoginPage;