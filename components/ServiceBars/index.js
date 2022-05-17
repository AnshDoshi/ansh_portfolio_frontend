import React from "react";

const ServiceBars = ({ img, title, desc }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 m-5 transform duration-500 hover:-translate-y-1  hover:scale-105 hover:shadow-gray-800/100">
      <div className="flex justify-center md:justify-end -mt-16">
        {/* <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          {src}
        /> */}
        {img}
      </div>
      <div>
        <h2 className="text-gray-800 text-2xl font-bold m-5">{title} </h2>
        <p className="mt-2 text-gray-600 m-4">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceBars;
