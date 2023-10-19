import React from 'react';
import { Link } from 'react-router-dom';

function Button({ text, link }) {
  return (
    <Link to={link}>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-gray-800 hover:bg-gray-300 transition duration-300">{text}</div>
    </Link>
  );
}

export default Button;
