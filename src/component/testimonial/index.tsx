const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Preet Singh",
      feedback:
        "I had my bridal makeup done here, and it was absolutely flawless! Highly recommended.",
      image: "shi.png",
    },
    {
      name: "Ridhima Sharma",
      feedback:
        "The hair styling team is amazing. I’ve never felt more confident about my look.",
      image: "Ridhima.png",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 font-playfair">Testimonials</h2>
      <div className="flex justify-center gap-8 px-6">
        {testimonials.map(({ name, feedback, image }, index) => (
          <div key={index} className="max-w-sm bg-purple-50 p-6 rounded-lg shadow-lg">
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="italic mb-4">"{feedback}"</p>
            <h4 className="font-bold">{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
