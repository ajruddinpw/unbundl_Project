import { useState } from "react";
import "../style/faqAccordion.css";

const FAQ_DATA = [
  {
    id: 1,
    question: "What are Aligners?",
    answer:
      "Aligners are custom-made, clear plastic trays that gradually shift your teeth into the correct position. They are removable, nearly invisible, and far more comfortable than traditional metal braces.",
  },
  {
    id: 2,
    question: "How do Aligners work?",
    answer:
      "Aligners work through a series of custom-fitted trays that apply gentle, consistent pressure to specific teeth. Each tray moves your teeth in small increments toward the final desired position.",
  },
  {
    id: 3,
    question: "Can any dentist do irregular teeth treatment?",
    answer:
      "Not all dentists are trained in aligner therapy. Whistle partners exclusively with trained orthodontists at Clove Dental clinics who are certified in aligner treatment protocols.",
  },
  {
    id: 4,
    question: "Are there any restriction on eating or drinking?",
    answer:
      "Yes — aligners should be removed before eating or drinking anything other than plain water. After eating, brush your teeth and rinse your aligners before putting them back in.",
  },
  {
    id: 5,
    question: "How long does the treatment take?",
    answer:
      "Treatment duration varies by case. Mild cases can take 3–6 months, while moderate to complex cases may require 12–18 months. Your doctor will give an accurate timeline after your 3D scan.",
  },
];

function FAQAccordion() {
  // null = all closed, number = open item id
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq">
      <div className="faq__container">

        {/* Heading —   */}
        <h2 className="faq__heading">
          <span className="faq__heading-purple">Got Questions?</span>{" "}
          We've got answers
        </h2>

        {/* Accordion list */}
        <div className="faq__list">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="faq__item">

                {/* Question row */}
                <button
                  className="faq__question"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq__question-text">{item.question}</span>
                  <span className={`faq__icon ${isOpen ? "faq__icon--open" : ""}`}>
                    +
                  </span>
                </button>

                {/* Answer — expands/collapses */}
                <div className={`faq__answer ${isOpen ? "faq__answer--open" : ""}`}>
                  <p className="faq__answer-text">{item.answer}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQAccordion;