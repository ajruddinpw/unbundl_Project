import "../style/navbar.css";
import logo from "../assets/logoW.png";
import callIcon from "../assets/call-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Whistle Logo" className="logo" />

        <button className="call-btn">
          <img src={callIcon} alt="Call" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;