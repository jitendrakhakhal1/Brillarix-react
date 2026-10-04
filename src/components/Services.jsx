import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      id: 1,
      icon: "</>",
      title: "Web Apps",
      description: "Modern software",
    },
    {
      id: 2,
      icon: "AI",
      title: "AI Products",
      description: "Intelligent solutions",
    },
    {
      id: 3,
      icon: "⚙",
      title: "Automation",
      description: "Save time",
    },
  ];

  return (
    <section className="services">
      <h2>What We Build</h2>

      <div className="cards-container">
        {services.map((service => (
           
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          
        )))}
      </div>
    </section>
  );
}

export default Services;


