'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-stone-950 text-zinc-100 px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold poppins-regular">Dylan Bowman</div>
        <ul className="flex gap-8 text-md font-medium poppins-regular">
          <li>
            <Link href="#home" className="hover:text-violet-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-violet-400 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-violet-400 transition-colors duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-violet-400 transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;