import { Link } from "react-router-dom";
import SkillsYard_Logo from "../assets/Skills Yard logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar for larger screens */}
      <div className="flex items-center justify-between px-8 py-4 text-lg z-10 top-0 sm:px-[50px] sm:text-[22px]">
        <div>
          <Link to="/"><img src={SkillsYard_Logo} className="h-[30px]" alt="Skills Yard Logo" /></Link>
        </div>
        <ul className="hidden sm:flex gap-[70px]">
          <Link to="/"><li className="cursor-pointer">Home</li></Link>
          <Link to="/userprofiles"><li className="cursor-pointer">User Profiles</li></Link>
          <Link to="/signup"><li className="cursor-pointer">Sign Up</li></Link>
        </ul>

        {/* Hamburger menu for smaller screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-5 py-5 bg-black text-white text-lg">
          <Link to="/"><li className="cursor-pointer">Home</li></Link>
          <Link to="/userprofiles"><li className="cursor-pointer">User Profiles</li></Link>
          <Link to="/signup"><li className="cursor-pointer">Sign Up</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
