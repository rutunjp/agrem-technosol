import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-40">
              <Image
                src="/AgremLogo.jpg"
                alt="Next.js Logo"
                width={180}
                height={33}
                priority
              />
            </div>
            <div className="hidden md:block ml-10">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="/"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    HOME
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    SENSORS &amp; MEASUREMENT
                  </Link>
                  <ul
                    className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${
                      isMenuOpen ? "" : "scale-y-0"
                    } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                  >
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 3
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    MARKETPLACE
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    NAVIGATION
                  </Link>
                  <ul
                    className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${
                      isMenuOpen ? "" : "scale-y-0"
                    } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                  >
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 1
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    INDUSTRY 4.0 / OPC
                  </Link>
                  <ul
                    className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${
                      isMenuOpen ? "" : "scale-y-0"
                    } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                  >
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    ANALYSERS
                  </Link>
                  <ul
                    className={`absolute top-12 left-0 mt-2 w-40 bg-gray-100 transform ${
                      isMenuOpen ? "" : "scale-y-0"
                    } origin-top-right transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 rounded-md shadow-lg`}
                  >
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SubMenu 3
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    FEATURES
                  </Link>
                </li>
                <li>
                  <Link
                    to="ABOUTUS"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href=""
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              <span className="sr-only">Open menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
