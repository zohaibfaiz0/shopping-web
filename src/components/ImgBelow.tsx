import React from 'react';
import Image from 'next/image';
import { FaTruck, FaMoneyBillAlt, FaHeadset, FaTag } from 'react-icons/fa';

const ImgBelow = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-8 md:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="relative">
            <Image
              src="/assets/slide2.jpg"
              alt="Summer Collection"
              width={1000}
              height={350}
              className="mx-auto object-contain w-full rounded-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-4">
              <div className="bg-white bg-opacity-70 p-6 md:p-8 rounded-lg shadow-md text-center w-full sm:w-3/4 md:w-1/2">
                <p className="text-lg md:text-xl font-bold">25% DISCOUNT</p>
                <p className="text-2xl md:text-3xl font-bold">Summer Collection</p>
                <p className="text-gray-600 text-base md:text-xl">
                  Starting at <b>$20</b>{' '}
                  <a href="#" className="text-blackish hover:underline hover:text-accent">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-b-2 mb-6 border-blackish">
        <div className="container py-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-32 lg:gap-32 w-full max-w-7xl">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaTruck className="h-8 w-8 text-blackish" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent">Free Shipping</h3>
                <p className="text-gray-500">Min 100$ in your cart.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaMoneyBillAlt className="h-8 w-8 text-blackish" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent">Free refund</h3>
                <p className="text-gray-500">15 days return policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaHeadset className="h-8 w-8 text-blackish" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent">Support</h3>
                <p className="text-gray-500">Call: + 0123 456 789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaTag className="h-8 w-8 text-blackish" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent">10% Discount</h3>
                <p className="text-gray-500">For First Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ImgBelow;