// Card.js
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-gray-100 rounded-3xl shadow-md p-4 m-4 w-64 h-48">
      <h2 className="text-xl text-gray-700 font-semibold mb-2">{title}</h2>
      <p className="text-gray-900">{content}</p>
    </div>
  );
};

export default Card;
