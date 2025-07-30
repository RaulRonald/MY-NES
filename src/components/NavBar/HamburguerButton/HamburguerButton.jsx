import { useState } from 'react';

const HamburgerButton = ({ onClick }) => { 
    const HamburgerLine = () => (
    <span className="border-4 p-1 border-black block bg-white rounded-full w-14 h-1">
    </span>
    );
    return (
        <button className="flex flex-col gap-2 p-2" onClick={onClick}>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
        </button>
    );
};


export default HamburgerButton;