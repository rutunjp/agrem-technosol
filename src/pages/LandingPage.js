"use client"
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import AboutUs from '@/components/AboutUs';
import CardList from '@/components/CardList';
import Feature from '@/components/Features';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import CarouselComponent from '@/components/CarouselComponent';
import { FaChevronUp } from 'react-icons/fa';


const LandingPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <div className='p-5'>
          <CarouselComponent />
          </div>
    
          <CardList />
         <div id='ABOUTUS'>
         <AboutUs />
         </div>
          <Feature />
        </div>
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-8 right-8 z-10 bg-gray-900 text-white rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </button>
      )}
      <Footer />
    </>
  );
};

export default LandingPage;
