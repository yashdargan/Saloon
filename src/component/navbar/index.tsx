import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

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
      <nav className="flex w-full h-12 justify-around items-center bg-transparent text-zinc-700 text-xl border-solid border-b-zinc-700 border-b-[1px] font-semibold">
        <h2>Beauty Saloon</h2>
        <div className="sm:hidden text-2xl cursor-pointer" onClick={toggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
        </div>
        <ul
          className={`${isOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row sm:w-[35%] w-full h-max justify-center items-center sm:justify-around gap-x-8 top-12 absolute sm:static right-0 text-black sm:text-gray-600 bg-white bg-opacity-10`}
        >
          {menu.map(({ name, link }: IMenuList) => (
            <>
              <div className="">{name}</div>
            </>
          ))}
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-5 py-2">
            <AiFillFacebook className="text-2xl" />
            <AiFillInstagram className="text-2xl" />
            <AiFillYoutube className="text-2xl" />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
