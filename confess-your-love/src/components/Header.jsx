import { NavLink } from 'react-router';
import './Header.css'

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/">
            <img className="home-icon" src="/images/home.gif" />
          </NavLink>
            <label>(Early Access)</label>
        </div>

        <div className="right-section">
          <NavLink to="/login">
            <button className="button-secondary">Log in</button>
          </NavLink>

          <NavLink to="/signup">
            <button className="button-primary">Get started</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;