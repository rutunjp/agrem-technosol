import React, { useEffect, useState } from "react";

const CardStack = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const cardContainerClass = isMobile
    ? "flex flex-col gap-4 w-fit transform rotate-4  text-center  transition-transform duration-300 mb-4"
    : "flex flex-col gap-4 w-fit transform rotate-4  text-center skew-x-[-10deg]  transition-transform duration-300 mb-4";
  const cardClass = isMobile
    ? "bg-black text-white rounded-lg shadow-md p-6 hover:scale-110 hover:translate-y-[-10px] transition-transform duration-300 mb-4"
    : "bg-black text-white rounded-lg shadow-md p-6 hover:scale-110 hover:translate-y-[-10px] transition-transform duration-300 mb-4";

  return (
    <div className={cardContainerClass}>
      <div
        className={cardClass}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        Custom Built Sensors
      </div>
      <div
        className={cardClass}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        High Precision Measurement
      </div>
      <div
        className={cardClass}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        On-call Support - Toll-Free 1800 1212-515
      </div>
      <div
        className={cardClass}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        Make in India Initiative
      </div>
    </div>
  );
};

export default CardStack;
