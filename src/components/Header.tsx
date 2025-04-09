import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className='relative container mx-auto flex justify-between items-start gap-2 px-7 py-9'>
      <div className='w-1/12 hidden md:block'></div> {/* Spacer */}
      <figure className='flex-grow flex justify-center md:justify-start'>
        <Link href='/' className='w-[100px] md:w-[175px]'>
          <Image
            src='/logo.svg'
            alt='Fametonic Logo'
            width={175}
            height={75}
            className='w-full h-auto'
          />
        </Link>
      </figure>
      <Navigation />
      <div className='w-1/12 hidden md:block'></div> {/* Spacer */}
    </header>
  );
};

export default Header;
