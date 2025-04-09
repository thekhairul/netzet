'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import Hamburger from './icons/Hamburger';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = isOpen ? 'block animate-folded-entrance' : 'hidden';
  const handleClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';

    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('nav')) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
        document.removeEventListener('click', handleOutsideClick);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscapeKey);
      }
    };

    if (newIsOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }
  };
  return (
    <nav>
      <button
        onClick={handleClick}
        className='md:hidden text-white'
        aria-expanded={isOpen}
        aria-label='Toggle menu'
      >
        {isOpen ? (
          <CloseIcon className='h-6 w-6' />
        ) : (
          <Hamburger className='h-6 w-6' />
        )}
      </button>
      <ul
        className={`${toggleClass} origin-top absolute z-10 left-0 right-0 top-full min-h-[calc(100vh-200px)] md:min-h-0 md:relative bg-black flex md:flex flex-col md:flex-row gap-10 items-center justify-center`}
        role='menu'
      >
        <li
          role='menuitem'
          className='font-figtree font-semibold text-[18px] transition-colors duration-300 text-gray hover:text-white'
        >
          <Link href='#'>About us</Link>
        </li>
        <li
          role='menuitem'
          className='font-figtree font-semibold text-[18px] transition-colors duration-300 text-gray hover:text-white'
        >
          <Link href='#'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
