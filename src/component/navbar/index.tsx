import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface IMenuList {
  name: "string";
  link: "string";
}

const menu: IMenuList[] = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/" },
  { name: "About us", link: "/" },
  { name: "Contact", link: "/" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex w-full h-12 justify-around items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-2xl">
        <h2>Beauty Saloon</h2>
        <div className="sm:hidden text-2xl cursor-pointer" onClick={toggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
        </div>
        <ul
          className={`${isOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row sm:w-[30%] w-full h-max justify-center items-center sm:justify-around gap-x-8 sm:gap-x-2.5 top-12 absolute sm:static right-0 text-black sm:text-white`}
        >
          {menu.map(({ name, link }: IMenuList) => (
            <>
              <div className="">{name}</div>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
