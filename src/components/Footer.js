import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 relative bottom-0 left-0 w-full flex flex-col items-center">
      <div className="justify-center w-screen z-10 ">
      <div className="flex text-white w-screen mb-5">
        <div className="container mx-auto ">
          <div className="xs:grid sm:grid sm:grid-cols-1 xxs:text-black xs:grid-cols-1 md:flex items-center justify-between h-16">
            <ul>
              <li>
                <span><FaPhoneSquareAlt className="inline p-y-2" /> Contact  :</span>
                <a href="tel:+91 - 9376227684"> +91-9376227684</a>
              </li>
            </ul>
            <ul>
              <li>
                <span>A Make In India Initiative :</span>
                <img
                  src="/makeinindia.png"
                  class="mx-3 h-5 inline-block mix-blend-difference "
                />
              </li>
            </ul>
            <ul>
              <li>
                <span><FaEnvelope className="inline p-y-2" /> Email :</span>
                <a href="mailto:sales@agremtechnosol.com"> info@agremtechnosol.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
