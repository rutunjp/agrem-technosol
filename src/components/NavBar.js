import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed justify-center w-screen z-10 bg-black">
      <div className="flex bg-black text-white top-0 w-screen mb-5">
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
  );
}
