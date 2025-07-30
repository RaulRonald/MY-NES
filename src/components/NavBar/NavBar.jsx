import { useState } from 'react';
import NavLateral from './NavLateral/NavLateral';
import HamburgerButton from './HamburguerButton/HamburguerButton';
import NavLink from './NavLink/NavLink';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-red-600 nes-container mx-auto px-4 py-2">
      <nav className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-between w-full lg:bg-white rounded-full">
          <li className="hidden lg:flex gap-4">
            <NavLink caminho="/" texto="Home" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>
          <li className="hidden lg:flex gap-4">
            <NavLink caminho="/jogos" texto="Jogos" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>
          <li className="mx-4  lg:bg-red-600 lg:rounded-none lg:border-none border-4 rounded-full">
            <i className="nes-logo m-5"></i>
          </li>
            <li className="hidden lg:flex gap-4">
            <NavLink caminho="/sobre" texto="Sobre" closeMenu={closeMenu} toggleMenu={toggleMenu} />
            </li>
            <li className="hidden lg:flex gap-4">
            <NavLink caminho="/redes" texto="Redes" closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </li>
          <li className="lg:hidden ml-auto">
            <HamburgerButton onClick={toggleMenu} />
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <div className="fixed top-0 right-0 z-50">
          <NavLateral closeMenu={closeMenu} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default NavBar;
