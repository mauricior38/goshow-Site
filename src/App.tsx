import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

import ScrollProgress from "./components/ui/scroll-progress";
import Company from "./pages/Company";
import { WhatsappButton } from "./components/whatsApp";
import Portifolio from "./pages/Portifolio";

function App() {
  return (
    <>
      <ScrollProgress className="top-[65px]" />
      <WhatsappButton />
      <Navbar />
      <Hero />
      <Products />
      <Portifolio />
      <Company />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
