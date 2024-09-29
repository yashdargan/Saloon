
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillPhone,
} from "react-icons/ai";

interface IMenuList {
  name: string;
  link: string;
}

const menu: IMenuList[] = [
  { name: "Home", link: "#hero" },
  { name: "Services", link: "#services" },
  { name: "About us", link: "#testimonials" },
  { name: "Contact", link: "#footer" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleNavItemClick = () => {
    setIsOpen(false); // Close menu when an item is clicked
  };

  return (
    <>
      <nav className="flex w-full h-16 justify-between items-center px-6 bg-white shadow-md text-zinc-700 text-lg font-medium fixed top-0 z-50">
        <h2 className="text-2xl font-bold text-purple-600 hover:text-purple-800 transition-all duration-300 font-greatvibes">
          <a href="#footer">
            Manisha Makeover
          </a>
        </h2>

        <div className="sm:hidden text-2xl cursor-pointer" onClick={toggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
        </div>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row sm:w-[40%] w-full h-screen sm:h-auto justify-center items-center sm:justify-between absolute sm:static top-16 right-0 bg-white sm:bg-transparent shadow-lg sm:shadow-none transition-all duration-300 ease-in-out`}
        >
          {menu.map(({ name, link }: IMenuList) => (
            <li
              key={name}
              className="text-xl font-semibold hover:text-purple-600 py-5 sm:py-0 sm:px-4 transition-all duration-700 ease-in-out"
            >
              <a
                href={link}
                className="py-4 px-6 sm:px-0"
                onClick={handleNavItemClick} // Close menu on click
              >
                {name}
              </a>
            </li>
          ))}

          <div className="flex flex-row justify-center items-center gap-6 mt-8 sm:mt-0">
            <a href="https://www.facebook.com/manisha.dargan.7" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook className="text-3xl hover:text-purple-600 transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/angels_lookmakeup_studio?igsh=azhkdHd5Nm81eHNo" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-3xl hover:text-purple-600 transition-all duration-300" />
            </a>
            <a href="https://youtube.com/@manishadargan" target="_blank" rel="noopener noreferrer">
              <AiFillYoutube className="text-3xl hover:text-purple-600 transition-all duration-300" />
            </a>
            <a href="tel:8899044201">
              <AiFillPhone className="text-3xl hover:text-purple-600 transition-all duration-300" />
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

