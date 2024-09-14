/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { close, logo, footerlogo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-[100px] flex py-6 justify-between items-center navbar">
     <img src={footerlogo}
    alt="optitunity" 
    className="w-[246px] h-[100px] object-contain"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
 {/* FOR MOBILE DEVICES  */}
      <div className="sm:hidden flex flex-1 justify-end
      items-center">
        <img src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] 
        object-contain"
        onClick={() => setToggle((prev) => !prev)}
        />

        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 
        bg-black-gradient absolute top-40 right-0 mx-4
        my-2  min-w-[140px] rounded-x1 sidebar`}>
           <ul className="list-none flex flex-col
           justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
              font-normal cursor-pointer
               text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
            }`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
