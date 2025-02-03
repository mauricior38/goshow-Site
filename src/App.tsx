import Contact from "./pages/Contact";
import Features from "./pages/Products";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Partners from "./pages/Partners";

import ScrollProgress from "./components/ui/scroll-progress";
import Company from "./pages/Company";
import { WhatsappButton } from "./components/whatsApp";

import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <ScrollProgress className="top-[65px]" />
      <WhatsappButton />
      <Navbar />
      <Hero />
      <Company />
      <Features />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
