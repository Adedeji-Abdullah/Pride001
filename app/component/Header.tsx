'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed inset-x-0 text-white top-0 z-[99] mx-auto flex w-full items-center justify-between bg-black/90 px-6 py-7 shadow-md backdrop-blur-sm">
      <div>
        <p>Pride Garment</p>
      </div>

      <nav className="hidden md:flex">
        <Link href="#" className="mx-3 hover:text-gray-300">
          home
        </Link>
        <Link href="#" className="mx-3 hover:text-gray-300">
          about
        </Link>
        <Link href="#" className="mx-3 hover:text-gray-300">
          contact
        </Link>
        <Link href="#" className="mx-3 hover:text-gray-300">
          place your order
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <p>🛒</p>

        <div className="text-2xl md:hidden">
          <button onClick={handleMenuClick} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute left-0 top-full mt-2 flex w-full flex-col items-center gap-4 bg-black px-6 py-6 text-white md:hidden">
          <Link href="#" className="hover:text-gray-300">
            home
          </Link>
          <Link href="#" className="hover:text-gray-300">
            about
          </Link>
          <Link href="#" className="hover:text-gray-300">
            contact
          </Link>
          <Link href="#" className="hover:text-gray-300">
            place your order
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;