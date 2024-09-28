
const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-purple-50">
      <h2 className="text-4xl font-bold text-center mb-12 font-playfair">Get in Touch</h2>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Message</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-4 rounded-md hover:bg-purple-700 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
