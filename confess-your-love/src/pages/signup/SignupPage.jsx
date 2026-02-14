import { NavLink } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./SignupPage.css";

function SignupPage() {
  return (
    <>
      <Header />

      <div className="signup-page">
          <h1>Create Account</h1>
          <h3>Sign up to get started</h3>

        <div className="input-container">
          <span>Full Name:</span>
          <input
            type="text"
            placeholder="James Bond"
          />
        </div>

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

        <button className="auth-signup-button">Sign Up</button>

        <p className="login">Already have an account?
          <NavLink to="/login" className="login-link">
            Log in
          </NavLink>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default SignupPage;