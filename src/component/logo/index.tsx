
const Logo: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-8 py-8 bg-gradient-to-b from-purple-50 via-white to-purple-50 rounded-lg shadow-lg">
      <h1 className="font-extrabold text-5xl pt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 transition-transform duration-300 transform hover:scale-105 font-greatvibes">
        Manisha Makeover
      </h1>
      <p className="px-6 text-center italic font-light text-xl text-gray-700 max-w-3xl mb-4">
        From <span className="font-semibold text-purple-600">Makeup</span> to <span className="font-semibold text-purple-600">Hairstyle</span>, we help you achieve the perfect <span className="font-semibold text-purple-600">Bridal look</span> to make you feel radiant and beautiful as you walk down the aisle.
      </p>

      <p className="px-6 text-center italic font-light text-lg text-gray-600 max-w-3xl">
        Step into a world of elegance where every detail is crafted to perfection. Our expert team combines <span className="font-semibold text-purple-600">creativity</span> and <span className="font-semibold text-purple-600">skill</span> to bring out the best in you, whether it's a casual chic style or a glamorous makeover for your big day. 
      </p>

      <p className="px-6 text-center italic font-light text-lg text-gray-600 max-w-3xl mt-4">
        Let us turn your vision into reality, creating unforgettable moments with a touch of <span className="font-semibold text-purple-600">luxury</span>, <span className="font-semibold text-purple-600">elegance</span>, and <span className="font-semibold text-purple-600">grace</span>. Your beauty is our passion.
      </p>

      <p className="px-6 text-center italic font-medium text-2xl text-purple-500 mt-6 animate-bounce">
        "Beauty is power, and makeup is something that enhances that; it's a woman's secret."
      </p>
    </div>
  );
};

export default Logo;

