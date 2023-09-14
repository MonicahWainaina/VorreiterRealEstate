import React from 'react'

const C = ({ images }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };

    return (
    <div className="flex items-center justify-center">
      <div className="w-96">
        <div className="relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`absolute transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-4 h-4 rounded-full mx-2 focus:outline-none ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default C