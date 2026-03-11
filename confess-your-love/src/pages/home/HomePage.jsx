import { NavLink } from 'react-router'
import useAuthStore from '../../store/useAuthStore'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'motion/react'
import { container, fadeRight, fadeUp } from '../../animations/motion'
import './HomePage.css'

function Homepage() {
  const { authUser } = useAuthStore();

  return (
    <>
      <Header />

      <div className="home-page">
        <img className="animated-hearts" src="images/animated-hearts.gif" />

        <motion.div
          className="hero-container"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p variants={fadeUp} className="home-title">Turn your feelings</motion.p>
          <motion.p variants={fadeUp} className="home-title">into a beautiful page.</motion.p>

          <motion.div variants={fadeUp} className="hero-content">
            <motion.p variants={fadeRight} className="home-subtitle">Create a fun and romantic animated page you can send to your crush.</motion.p>

            <NavLink to={authUser ? `/${authUser.username}` : "/username"} className="button-primary create-button">
              Create
              <img className="animated-mail" src="/images/animated-mail.gif" />
            </NavLink>
          </motion.div>
        </motion.div>


      </div>

      <Footer />
    </>
  );
}

export default Homepage;