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

      <Helmet>

        <meta
          name="description"
          content="Empresa especializada em transmissões, desenvolvimento e tudo que envolve o mundo do ao vivo."
        />
        <meta
          name="keywords"
          content="livestream, stream, broadcast, transmissão, ao vivo, filmagem, gravação, podcast, videocast, app, site, website"
        />
        <meta property="og:description" content={'Empresa especializada em transmissões, desenvolvimento e tudo que envolve o mundo do ao vivo'} />
        <meta
          property="og:image"
          itemProp="image"
          content={"./assets/capaSEO.webp"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.goshow.com.br/"} />
        <meta
          property="twitter:title"
          content={"Goshow - tecnologia em transmissões"}
        />
        <meta property="twitter:description" content={"Empresa especializada em transmissões, desenvolvimento e tudo que envolve o mundo do ao vivo."} />
        <meta
          property="twitter:image"
          itemProp={"./assets/capaSEO.webp"}
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
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
