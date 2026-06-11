import "./App.css";

import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import Hero from "./components/Hero";
import LeadForm from "./components/LeadForm";
import CloveBanner from "./components/CloveBanner";
import WhyWhistle from "./components/WhyWhistle";
import FAQAccordion from "./components/FAQAccordion";
import WhistleApart from "./components/WhistleApart";

function App() {
  return (
    <>
      <Navbar />
      <OfferBanner />
        <Hero />
        <LeadForm />
        <CloveBanner />
        <WhyWhistle />
        <FAQAccordion />
        <WhistleApart />
    </>
  );
}

export default App;