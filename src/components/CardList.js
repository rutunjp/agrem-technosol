import React from 'react';

const Card = ({ name, route }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
      <a href={route} className="text-xl font-bold text-gray-800 hover:text-indigo-600">{name}</a>
    </div>
  );
};

const CardList = () => {
  const cardData = [
    { name: 'Aerospace', route: '/aerospace' },
    { name: 'Marine', route: '/marine' },
    { name: 'Navigation', route: '/navigation' },
    { name: 'OPC', route: '/opc' },
    { name: 'Analysers', route: '/analysers' },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cardData.map((card, index) => (
        <Card key={index} name={card.name} route={card.route} />
      ))}
    </div>
  );
};

export default CardList;
