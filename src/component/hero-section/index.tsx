const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
      style={{ backgroundImage: "url('hero.jpg')" }}
    >
      <h1 className="text-6xl font-greatvibes text-purple-950 text-shadow-lg mb-4">
        Discover Your True Beauty
      </h1>
      <p className="text-xl max-w-2xl mb-8">
        Experience luxury beauty treatments tailored just for you. Our expert
        stylists will make you look and feel fabulous for every occasion.
      </p>
      <a
        href="#services"
        className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300"
      >
        Explore Services
      </a>
    </div>
  );
};

export default Hero;
