import useAuthStore from '../store/useAuthStore';
import { NavLink, useLocation } from 'react-router';
import './Header.css'

function Header() {
  const location = useLocation();
  const { authUser, logout } = useAuthStore();

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/">
            <img className="home-icon" src="/images/home.gif" />
          </NavLink>
          <label className="label-early-access">Early access</label>
        </div>

        <div className="right-section">
          {!authUser && location.pathname === "/" && (
            <>
              <NavLink to="/signup">
                <button className="button-primary">Get started</button>
              </NavLink>

              <NavLink to="/login">
                <button className="button-secondary">Log in</button>
              </NavLink>
            </>
          )}

          {authUser && (
            <>
              <p className="greet-text">Hi, {authUser.fullName}</p>
              <button className="logout-button"
                onClick={() => logout()}
              ><i className="ri-logout-box-r-line"></i></button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;