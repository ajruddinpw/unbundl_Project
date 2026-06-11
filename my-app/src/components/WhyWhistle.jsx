import { useState, useEffect } from "react";
import "../style/whyWhistle.css";

function WhyWhistle() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data.");
        return res.json();
      })
      .then((data) => {
        setCards(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="why-whistle">
      <div className="why-whistle__container">

        <h2 className="why-whistle__heading">Why Whistle?</h2>

        {/* Loading — skeleton shimmer */}
        {loading && (
          <div className="why-whistle__grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="why-whistle__skeleton">
                <div className="why-whistle__skeleton-img" />
                <div className="why-whistle__skeleton-body">
                  <div className="why-whistle__skeleton-line why-whistle__skeleton-title" />
                  <div className="why-whistle__skeleton-line" />
                  <div className="why-whistle__skeleton-line why-whistle__skeleton-short" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="why-whistle__error">
            <span className="why-whistle__error-icon">⚠️</span>
            <p>Something went wrong: {error}</p>
            <button
              className="why-whistle__retry"
              onClick={() => window.location.reload()}
            >
              Try again
            </button>
          </div>
        )}

        {/* Cards — all data directly from API */}
        {!loading && !error && (
          <div className="why-whistle__grid">
            {cards.map((product) => (
              <div key={product.id} className="why-whistle__card">
                <div className="why-whistle__img-wrap">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="why-whistle__img"
                  />
                </div>
                <div className="why-whistle__content">
                  <h3 className="why-whistle__card-title">{product.title}</h3>
                  <p className="why-whistle__card-desc">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default WhyWhistle;