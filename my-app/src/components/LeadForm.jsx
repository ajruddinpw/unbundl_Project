import { useState } from "react";
import "../style/leadForm.css";

function LeadForm() {
  const [hasGap, setHasGap] = useState("");

  return (
    <section className="lead-form-section">
      <div className="lead-form-container">

        <h2 className="lead-title">
          Do you have Teeth Gaps or Crooked Teeth?
        </h2>

        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="teeth"
              value="yes"
              checked={hasGap === "yes"}
              onChange={(e) => setHasGap(e.target.value)}
            />
            <span>Yes</span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="teeth"
              value="no"
              checked={hasGap === "no"}
              onChange={(e) => setHasGap(e.target.value)}
            />
            <span>No</span>
          </label>
        </div>

        <form className="lead-form">

          <div className="input-group">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Ajay Kumar"
            />
          </div>

          <div className="input-group">
            <label>Mobile Number*</label>
            <input
              type="tel"
              placeholder="+91 Mobile number"
            />
          </div>

          <button type="submit" className="scan-btn">
            Book a Free Scan
          </button>

        </form>

        <div className="consent-wrapper">
          <input type="checkbox" id="consent" />

          <label htmlFor="consent">
            I hereby consent to receive calls / messages from
            Whistle and its partners and override DND settings.
          </label>
        </div>

      </div>
    </section>
  );
}

export default LeadForm;