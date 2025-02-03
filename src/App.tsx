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
import img_url from './assets/capaSEO.webp'

function App() {
  return (
    <>

      <Helmet>
        <title>Goshow - tecnologia em transmissões</title>
        <meta
          name="description"
          content="Empresa especializada em transmissões, desenvolvimento e tudo que envolve o mundo do ao vivo."
        />
        <meta
          name="keywords"
          content="livestream, stream, broadcast, transmissão, ao vivo, filmagem, gravação, podcast, videocast, app, site, website"
        />
        <meta name="" />
        <meta property="og:description" content={'Empresa especializada em transmissões, desenvolvimento e tudo que envolve o mundo do ao vivo'} />
        <meta
          property="og:image"
          itemProp="image"
          content={img_url}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={location.href} />
        <meta
          property="twitter:title"
          content={"Goshow - tecnologia em transmissões"}
        />
        <meta property="twitter:description" content={"Empresa especializada em transmissões, desenvolvimento e tudo que envolve o mundo do ao vivo."} />
        <meta
          property="twitter:image"
          itemProp={img_url}
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
