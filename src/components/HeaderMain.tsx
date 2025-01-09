import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

import { HiOutlineShoppingBag } from'react-icons/hi';

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-6 h-42'>
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Image
          src="/assets/upl-removebg-preview.png"
          width={100}
          height={100}
          alt='GlamUp'
          className="mb-4 sm:mb-0"
        />
        <div className='font-bold text-4xl mb-4 text-center text-blackish'>
          Elegancia
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative mb-4 sm:mb-0">
        <input
    type="text"
    placeholder="Enter a product name..."
    className="border-gray-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent border p-2 rounded-lg w-full"
/>
          <BsSearch className='absolute top-0 right-0 mr-3 mt-3 hover:text-accent text-gray-400' size={20} />
        </div>
        <div className='flex gap-4 text-[30px] text-gray-500'>
          <BiUser className='hover:text-accent'/>
          <Link href="/cart">
          <HiOutlineShoppingBag  className='hover:text-accent'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;