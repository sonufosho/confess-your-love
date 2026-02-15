import { NavLink } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./SignupPage.css";

function SignupPage() {
  return (
    <>
      <Header />

      <div className="signup-page">
        <p className="signup-title">Create Account</p>
        <p className="signup-subtitle">Sign up to get started</p>

        <div className="input-container">
          <label className="signup-label">Full name</label>
          <input
            type="text"
            placeholder="James Bond"
          />
        </div>

        <div className="input-container">
          <label label className="signup-label">Username:</label>
          <input
            type="text"
            placeholder="james_bond"
          />
        </div>

        <div className="input-container">
          <label label className="signup-label">Password:</label>
          <input
            type="text"
            placeholder="Enter your password"
          />
        </div>

        <button className="button-primary signup-button">Sign Up</button>

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