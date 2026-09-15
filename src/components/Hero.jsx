import { useState } from "react";

function Hero() {
  const [heroText, setHeroText] = useState(
    "We turn ideas into powerful digital products."
  );

  function handleStartClick() {
    setHeroText("Your idea can become a real project.");
  }

  return (
    <section className="hero">
      <h1>Build Better Software.</h1>

      <p>{heroText}</p>

      <button className="primary-button" onClick={handleStartClick}>
        Start a Project
      </button>
    </section>
  );
}

export default Hero;