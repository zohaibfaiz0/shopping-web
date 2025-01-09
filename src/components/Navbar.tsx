'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <div className='container'>
          <div className='flex gap-10 mx-auto font-medium py-4 text-blackish w-fit'>
            <Link className='navbar__link relative' href="/">HOME</Link>
            <Link className='navbar__link relative' href="/MenPage">MEN'S</Link>
            <Link className='navbar__link relative' href="/WomenPage">WOMEN'S</Link>
            <Link className='navbar__link relative' href="/Jewelry">JEWELRY</Link>
            <Link className='navbar__link relative' href="/Perfume">PERFUME</Link>
            <Link className='navbar__link relative' href="/Blog">BLOG</Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden'>
        <div className='container'>
          {/* Hamburger Button */}
          <div className='flex justify-end py-4'>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className='text-2xl px-4'
            >
              ☰
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isOpen && (
            <div className='flex flex-col gap-4 mx-auto font-medium py-4 text-blackish'>
              <Link className='navbar__link text-center' href="/">HOME</Link>
              <Link className='navbar__link text-center' href="/MenPage">MEN'S</Link>
              <Link className='navbar__link text-center' href="/WomenPage"> WOMEN'S</Link>
              <Link className='navbar__link text-center' href="/Jewelry">JEWELRY</Link>
              <Link className='navbar__link text-center' href="/Perfume">PERFUME</Link>
              <Link className='navbar__link text-center' href="/Blog">BLOG</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;