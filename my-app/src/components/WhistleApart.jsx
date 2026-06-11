import { useState } from "react";
import "../style/whistleApart.css";

import whistleLogo from "../assets/whistle-logo.png";

const TABLE_ROWS = [
  {
    id: 1,
    feature: "Easy to complex cases",
    detail: "Whistle treats mild to complex misalignment cases, unlike most brands that only handle mild to moderate cases.",
    whistle: { type: "text", value: "Yes, mild to complex" },
    others: { type: "text", value: "No, only mild to moderate" },
  },
  {
    id: 2,
    feature: "Clear-cut Pricing",
    detail: "Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.",
    whistle: { type: "check" },
    others: { type: "cross" },
  },
  {
    id: 3,
    feature: "Aligner Change",
    detail: "Whistle aligners are changed every 10 days for faster, more precise results compared to the industry standard of every 2 weeks.",
    whistle: { type: "text", value: "Every 10 days" },
    others: { type: "text", value: "Every 2 weeks" },
  },
  {
    id: 4,
    feature: "Clinical Partnership",
    detail: "Whistle is backed by Clove Dental — India's largest dental chain — ensuring clinical oversight at every step of your treatment.",
    whistle: { type: "check" },
    others: { type: "cross" },
  },
  {
    id: 5,
    feature: "Movement Between Cities",
    detail: "With 900+ Clove Dental clinics across 30+ cities, you can continue your treatment seamlessly even if you relocate.",
    whistle: { type: "check" },
    others: { type: "cross" },
  },
  {
    id: 6,
    feature: "Complimentary Teeth Scaling",
    detail: "Every Whistle patient gets complimentary teeth scaling as part of their treatment package — at no extra cost.",
    whistle: { type: "check" },
    others: { type: "cross" },
  },
];

function Cell({ data }) {
  if (data.type === "check") {
    return (
      <span className="wa__badge wa__badge--check">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8L6.5 11.5L13 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }
  if (data.type === "cross") {
    return (
      <span className="wa__badge wa__badge--cross">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 3L11 11M11 3L3 11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </span>
    );
  }
  return <span className="wa__cell-text">{data.value}</span>;
}

function WhistleApart() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="wa">
      <div className="wa__container">

        <h2 className="wa__heading">What sets Whistle apart?</h2>

        {/* Table card */}
        <div className="wa__card">

          {/* Header row */}
          <div className="wa__header-row">
            <div className="wa__col-feature">
              <span className="wa__col-label">Features</span>
            </div>
            <div className="wa__col-whistle">
              {/* Whistle logo text — matches Figma */}
              {/* <div className="wa__logo">
                <span className="wa__logo-whistle">whistle</span>
                <span className="wa__logo-sub">AND SMILE</span>
              </div> */}
                   <img
                   src={whistleLogo}
                    alt="Whistle and Smile"
                    className="wa__logo-img"
                        />
            </div>
            <div className="wa__col-others">
              <span className="wa__col-label">Other Brands</span>
            </div>
          </div>

          {/* Data rows */}
          {TABLE_ROWS.map((row) => {
            const isOpen = openId === row.id;
            return (
              <div key={row.id} className="wa__row-group">

                {/* Main row */}
                <div className={`wa__row ${isOpen ? "wa__row--open" : ""}`}>
                  {/* Feature cell — clickable chevron */}
                  <div className="wa__col-feature">
                    <button
                      className="wa__feature-btn"
                      onClick={() => handleToggle(row.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="wa__feature-name">{row.feature}</span>
                      <span className={`wa__chevron ${isOpen ? "wa__chevron--up" : ""}`}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 4.5L7 9.5L12 4.5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Whistle cell */}
                  <div className="wa__col-whistle wa__col-whistle--data">
                    <Cell data={row.whistle} />
                  </div>

                  {/* Others cell */}
                  <div className="wa__col-others wa__col-others--data">
                    <Cell data={row.others} />
                  </div>
                </div>

                {/* Expanded detail row — blue bg panel */}
                {isOpen && (
                  <div className="wa__detail">
                    <p className="wa__detail-text">{row.detail}</p>
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default WhistleApart;