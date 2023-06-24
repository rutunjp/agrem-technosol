import React from 'react';
import { useSpring, animated } from 'react-spring';
import CardStack from './CardStack';

const NumberCounter = ({ value }) => {
  const animatedValue = useSpring({
    from: { value: 0 },
    to: { value },
    config: { duration: 500 },
  });

  return (
    <animated.span>{animatedValue.value.interpolate((val) => Math.floor(val))}</animated.span>
  );
};

const Feature = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transform hover:-translate-y-2 transition duration-300 ease-in-out m-3">
      <h2 className="text-2xl font-bold mb-4">FEATURES</h2>
      <p className="text-gray-600 mb-6">Developing Advanced Sensors For Demanding Applications</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        <div className="grid grid-rows-3 gap-4">
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <NumberCounter value={83} />
            </h3>
            <p className="text-gray-600">Total Sensors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <NumberCounter value={14} />
            </h3>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <NumberCounter value={6} />
            </h3>
            <p className="text-gray-600">Partners</p>
          </div>
        </div>
        <CardStack />
      </div>
    </div>
  );
};

export default Feature;
