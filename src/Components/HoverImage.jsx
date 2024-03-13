import React from "react";
import image from "../../public/Employee.jpg";
import Image from "next/image";
const HoverImage = ({id,tittle,image}) => {
  return (
    <div className="relative border-b border-gray-500 py-2">
      <div className=" flex items-center justify-between">
        <div className=" group">
          <div>
          <h1 className="uppercase flex items-baseline md:gap-2 gap-1 md:text-2xl lg:text-4xl text-sm cursor-pointer text-white">
            <span className="text-xs">{id}</span>
            {tittle}
          </h1>
          </div>
          <div className="absolute top-0 lg:right-1/4 md:right-20 right-16 pointer-events-none z-10">
            <Image src={image} alt="image" className="md:w-64 md:h-40 object-cover w-28 h-16 transition-all transform duration-300 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100" />
          </div>
        </div>
        <p className="text-white text-xs">View Live</p>
      </div>
    </div>
  );
};

export default HoverImage;
