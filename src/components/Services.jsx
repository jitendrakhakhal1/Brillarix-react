import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="services">
      <h2>What We Build</h2>

      <div className="cards-container">
        <ServiceCard
          icon="</>"
          title="Web Apps"
          description="Modern software"
        />

        <ServiceCard
          icon="AI"
          title="AI Products"
          description="Intelligent solutions"
        />

        <ServiceCard
          icon="⚙"
          title="Automation"
          description="Save time"
        />
      </div>
    </section>
  );
}

export default Services;