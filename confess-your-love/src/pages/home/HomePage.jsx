import { NavLink } from 'react-router'
import useAuthStore from '../../store/useAuthStore';
import Header from '../../components/Header'
import './HomePage.css'

function Homepage() {
  const { authUser } = useAuthStore();

  return (
    <>
      <Header />

      <div className="home-page">
        <div className="title-container">
          <img className="animated-hearts" src="images/animated-hearts.gif" />
          <p className="home-title">Got a crush on someone?</p>
        </div>

        <p className="home-subtitle">Confess your feelings</p>

        <NavLink to={authUser ? `/${authUser.username}` : "/username"} className="button-container">
          <button className="button-primary confess-button">
            Confess now
            <img className="animated-mail" src="/images/animated-mail.gif" />
          </button>
        </NavLink>

        <p className="footer-text">Respectfully. Risk it.</p>
      </div>
    </>
  );
}

export default Homepage;