'use client';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-4 mt-10">
      <div className="flex justify-between mb-4">
        <h4 className="font-semibold">Filters</h4>
        <h4 className="font-semibold">About Us</h4>
        <h4 className="font-semibold">Follow Us</h4>
      </div>

      <div className="flex justify-between mb-4">
        <p>All Products</p>
        <p>About Us</p>
        <div className="flex gap-4 text-xl">
          <FaFacebook className='bg-blue-500 rounded-full text-3xl p-1'/>
          <FaTwitter className='bg-blue-500 rounded-full text-3xl p-1'/>
          <FaInstagram className='bg-blue-500 rounded-full text-3xl p-1'/>
        </div>
      </div>

      <div className="flex justify-between text-sm w-[38rem]">
        <p>© 2024 American</p>
        <p>Contact</p>
      </div>
    </footer>
  );
}
