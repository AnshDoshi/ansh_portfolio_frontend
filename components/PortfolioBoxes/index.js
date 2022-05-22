import React from "react";

export const PortfolioBoxes = ({ img, name, desc }) => {
  return (
    <div className="w-full bg-gray-400  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center transform duration-300 hover:scale-105">
      <div>{img}</div>
      <div className="text-center py-8 sm:py-6">
        <p className="text-xl text-gray-700 font-semibold mb-2">{name}</p>
        <p className="text-base m-4 text-gray-50 font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default PortfolioBoxes;
