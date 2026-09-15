import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ContactForm />
    </div> 
  );
}

export default App;