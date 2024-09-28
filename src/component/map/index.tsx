import React from "react";

const Map: React.FC = () => {
  return (
    <section id="map" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8 font-playfair text-purple-600">
        Visit Us
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.12712287235468!2d78.13763309009627!3d29.920924327119934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909466a73edc255%3A0x35ab0ad19614a818!2sNear%20Satikund%2C%20Laksar%20Rd%2C%20Shivpuri%20Colony%2C%20Kankhal%2C%20Haridwar%2C%20Uttarakhand%20249404!5e0!3m2!1sen!2sin!4v1727549479605!5m2!1sen!2sin"
          width="100%" // Make it responsive
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
