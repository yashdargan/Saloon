import { AiFillFacebook, AiFillInstagram, AiFillPhone, AiFillYoutube } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2 font-greatvibes">Manisha Makeover</h3>
          <p>&copy; 2024 All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/angelslookunisexsalon?igsh=NXN6dTF5Mmk1azZ2" aria-label="Facebook">
            <AiFillFacebook className="text-4xl hover:text-purple-400" />
          </a>
          <a href="https://www.instagram.com/angelslookunisexsalon?igsh=NXN6dTF5Mmk1azZ2" aria-label="Instagram">
            <AiFillInstagram className="text-4xl hover:text-purple-400" />
          </a>
          <a href="https://www.instagram.com/angelslookunisexsalon?igsh=NXN6dTF5Mmk1azZ2" aria-label="Youtube">
            <AiFillYoutube className="text-4xl hover:text-purple-400" />
          </a>
        
          {/* Call Icon */}
          <a href="tel:8899044201" aria-label="Call">
            <AiFillPhone className="text-4xl hover:text-purple-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
