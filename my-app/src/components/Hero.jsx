import "../style/hero.css";
import heroGirl from "../assets/hero-girl.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            Invisible Aligners for a dream smile
          </h1>

          <p className="hero-description">
            Book a Scan and avail a free
            Orthodontist Consult
            <span className="hero-highlight"> worth ₹1500</span>
          </p>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroGirl}
            alt="Invisible Aligner"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;