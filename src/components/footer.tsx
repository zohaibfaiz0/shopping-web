import Link from 'next/link';
import Image from 'next/image';
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-blackish text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
          <Image 
        src="/assets/upl-removebg-preview.png" 
        width={100} 
        height={100} 
        alt='GlamUp' 
        className="mb-4 sm:mb-0"
      />
            <h2 className="text-2xl text-accent pl-1 font-bold mb-4">Elegencia</h2>
            <p className="text-gray-400 mb-4">
            A trendy website for the latest in fashion, featuring curated collections and a seamless shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent">
                <BsFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                <BsTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                <BsInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                <BsLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Explore</h3>
            <nav className="space-y-2">
              <Link href="/account" className="block text-gray-400 hover:text-white">
                My Account
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">
                Contact Us
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">
                About Us
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="block text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
  <h3 className="font-semibold mb-4">Stay Updated</h3>
  <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
  <div className="space-y-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-3 py-2 w-full rounded-md text-black"
    />
    <button
      className="w-full bg-white hover:bg-accent px-4 py-2 rounded-md text-blackish"
    >
      Subscribe
    </button>
  </div>
</div>
</div>

        {/* Copyright */}
        <div className="border-t border-gray-500 mt-8 pt-6 text-center">
          <p className="text-white">
            © {new Date().getFullYear()} Elegencia All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}