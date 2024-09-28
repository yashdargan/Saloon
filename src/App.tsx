import Hero from "./component/hero-section";
import Logo from "./component/logo";
import Navbar from "./component/navbar";
import Services from "./component/services";
import Testimonials from "./component/testimonial";
import ContactForm from "./component/contact-form";
import Map from "./component/map";
import Footer from "./component/footer";

function App() {
  return (

    <>
      <Navbar/>
        <Logo />
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
        <Map /> 
        <Footer />
      
        </>
  );
}

export default App;

