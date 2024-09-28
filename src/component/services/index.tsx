
const Services: React.FC = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Flawless makeup for your special day.",
      image: "bridal.jpg", // Replace with the correct image paths
    },
    {
      title: "Hair Styling",
      description: "Custom cuts, color, and styling.",
      image: "hair_cut.jpeg",
    },
    {
      title: "Manicure & Pedicure",
      description: "luxurious experience with our manicure and pedicure services.",
      image: "manicure.jpeg",
    },
    {
      title: "Facials",
      description: "Rejuvenating facials for glowing skin.",
      image: "facial.jpeg",
    },
  ];

  return (
    <section id="services" className="py-16 bg-purple-50 text-center">
      <h2 className="text-4xl font-bold mb-12 font-playfair text-purple-600">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-purple-700">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

