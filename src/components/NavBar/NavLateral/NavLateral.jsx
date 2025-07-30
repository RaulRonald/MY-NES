import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';

const NavLateral = ({toggleMenu, closeMenu }) => {
  return (
    <div className="align-middle flex flex-col gap-3 p-2 bg-red-600 pr-5 pl-5 ml-auto nes-container max-h-screen overflow-y-auto">
      <div className="flex nes-container">
        <span className=" text-2xl text-left m-5">
          NAV
        </span>
        <span className="ml-auto">
          <button type="button" className="nes-btn font-press-start size-min" onClick={closeMenu}>
          <span className="nes-icon close py-2"></span>
          </button>
        </span>
      </div>
      <div className="flex flex-col">
            <NavLink
                caminho="/"
                texto="Home"
                closeMenu={closeMenu}
                toggleMenu={toggleMenu}
            />
            <NavLink
                caminho="/"
                texto="Jogos" 
                closeMenu={closeMenu}
                toggleMenu={toggleMenu}
            />
            <NavLink
                caminho="/"
                texto="Redes" 
                closeMenu={closeMenu}
                toggleMenu={toggleMenu}
            />
            <NavLink
                caminho="/"
                texto="Sobre" 
                closeMenu={closeMenu}
                toggleMenu={toggleMenu}
            />
      </div>
      <label>
        <input type="checkbox" class="nes-checkbox"/>
        <span>Dark Theme</span>
      </label>
    </div>
  );
};

export default NavLateral;
