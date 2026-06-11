
import "../style/cloveBanner.css";
import cloveLogo from "../assets/clove logo.png";

const CloveBanner = () => {
  return (
    <section className="clove-banner">
      <div className="banner-content">
        <div className="banner-left">
          <h1>
            Book a Free 3D Teeth Scan and Orthodontist Consult in a
            <br />
            Clove Dental Clinic near you.
          </h1>
        </div>

        <div className="banner-right">
          <img src={cloveLogo} alt="Clove Dental Logo" className="clove-logo" />

          <button className="clinic-btn">
            Find Clinic
            <span className="arrow">⌄</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloveBanner;