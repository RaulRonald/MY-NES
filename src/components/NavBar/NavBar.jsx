import NavLateral from "./NavLateral/NavLateral";
import HamburgerButton from "./HamburguerButton/HamburguerButton";
import NavLink from "./NavLink/NavLink";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-red-600 w-screen px-4 transition-all duration-500 ease-in-out z-30 ${
        scrolled ? "fixed top-0 rounded-b-3xl py-1 shadow-md" : "py-2 border-red-800 border-b-4"
      }`}
    >
      <nav>
        <ul
          className={`flex items-center justify-between w-full rounded-full transition-all duration-500 ease-in-out ${
            scrolled ? "bg-red-600" : "lg:bg-white bg-red-600 lg:border-b-4 lg:border-gray-400"
          }`}
        >
          <li className={`gap-4 transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-0 hidden" : "hidden lg:flex opacity-100"}`}>
            <NavLink caminho="/" texto="Home" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>
          <li className={`gap-4 transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-0 hidden" : "hidden lg:flex opacity-100"}`}>
            <NavLink caminho="/Tutorials" texto="Tutorials" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>

          <li
            className={`flex items-center justify-center transition-all duration-500 ease-in-out rounded-full ${
              scrolled
                ? "scale-75 mx-auto  "
                : "scale-100 mx-0 lg:flex-col"
            }`}
          >
            <img src="https://cdn.wikimg.net/en/strategywiki/images/d/d1/Smb1_question_block.png" alt="?" className="w-32 h-32" />
            <p className="text-xl">SUPER MARIO BROS.</p>
          </li>

          <li className={`gap-4 transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-0 hidden" : "hidden lg:flex opacity-100"}`}>
            <NavLink caminho="/About" texto="About" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>
          <li className={`gap-4 transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-0 hidden" : "hidden lg:flex opacity-100"}`}>
            <NavLink caminho="/redes" texto="Redes" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>

          <li className={`ml-auto transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-0 hidden" : "flex lg:hidden opacity-100 "}`}>
            <HamburgerButton onClick={toggleMenu} />
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="fixed top-0 right-0 z-50 lg:hidden transition-all duration-500 ease-in-out">
          <NavLateral closeMenu={closeMenu} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default NavBar;
