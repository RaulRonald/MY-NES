import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ caminho, texto, toggleMenu, closeMenu }) => {
  
  return (
    <Link to={caminho} onClick={closeMenu} className=
    " text-center  hover:shadow-2xl shadow-lg m-2 border-red-800 border-b-4  hover:animate-pulse-grow font-press-start text-gray-300 hover:text-gray-100 bg-red-600 hover:bg-red-700 rounded-full py-4 px-5 text-xl hover:no-underline">
    {texto}
    </Link>
  );
};

export default NavLink;
