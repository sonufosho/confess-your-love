import { NavLink } from 'react-router'
import useAuthStore from '../../store/useAuthStore';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import './HomePage.css'

function Homepage() {
  const { authUser } = useAuthStore();

  return (
    <>
      <Header />

      <div className="home-page">
        <img className="animated-hearts" src="images/animated-hearts.gif" />

        <div className="hero-container">
          <p className="home-title">Turn your feelings</p>
          <p className="home-title">into a beautiful page.</p>

          <div className="hero-content">
            <p className="home-subtitle">Create a fun and romantic animated page you can send to your crush.</p>

            <NavLink to={authUser ? `/${authUser.username}` : "/username"} className="button-primary create-button">
              Create
              <img className="animated-mail" src="/images/animated-mail.gif" />
            </NavLink>
          </div>
        </div>


      </div>

      <Footer />
    </>
  );
}

export default Homepage;