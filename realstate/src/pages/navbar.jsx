import { NavLink } from "react-router-dom";
import image from '../assets/logo1.png';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bg-white w-full h-[15%] flex items-center justify-between shadow-lg px-6 md:px-12">
        <img className="w-[80px] md:w-[100px] h-[60px] md:h-[80px] cursor-pointer" src={image} alt="logo" />
        
        {/* Mobile menu button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} className="cursor-pointer" /> : <FaBars size={28} className="cursor-pointer" />}
        </div>
        
        {/* Navigation links */}
        <nav className={`flex-col md:flex md:flex-row md:space-x-8 font-medium text-lg md:text-2xl text-black ${isOpen ? 'flex' : 'hidden'} md:flex items-center`}>
          <NavLink to="/" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Features</NavLink>
          <NavLink to="/description" className="hover:text-red-500" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
