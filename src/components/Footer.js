import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 relative bottom-0 left-0 w-full flex flex-col items-center">
      <div className="text-sm mb-2">
        Agrem Technosol Ltd.
      </div>
      <p className="flex items-center">
        Created with <FaHeart className="text-red-500 mx-1" /> by Shreyans Mehta
      </p>
    </footer>
  );
};

export default Footer;
