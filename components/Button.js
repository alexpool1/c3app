import React from 'react';

const Button = ({ src, alt, text, backgroundColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <a className="flex items-center space-x-4">
        <div style={buttonStyle} className="rounded-full p-1">
          <img className="h-8 w-8 rounded-full" src={src} alt={alt} />
        </div>
        <div>
          <div className="text-md text-medium-gray font-sans font-normal">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default Button;
