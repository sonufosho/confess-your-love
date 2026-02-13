import Header from '../../components/Header'
import './HomePage.css'

function Homepage() {
  return (
    <>
      <Header />

      <div className="home-page">
        <div className="container">
          <div className="title">
            <img className="animated-hearts" src="images/animated-hearts.gif"/>
            <p>Got a crush on someone?</p>
          </div>
          <div className="subtitle">
            <p>Confess your feelings</p>
            <p>No more awkward conversations. No more overthinking.</p>
            <div className="confess-button">
              <button>
                Confess Now
              <img className="animated-mail" src="/images/animated-mail.gif" />
              </button>
            </div>
          </div>
          <div className="footer">
            <img className="animated-flower" src="images/animated-flower.gif"/>
            <img className="animated-bee" src="images/animated-bee.gif"/>
            <p>Respectfully. Risk it.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;