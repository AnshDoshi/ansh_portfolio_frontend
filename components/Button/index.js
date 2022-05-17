import React from "react";
// import styles from "./button.module.css";

const Button = ({ title, ...props }) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 to-blue-500 group-hover:from-indigo-500 group-hover:to-blue-500 hover:text-white dark:text-white  focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800"
      {...props}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {title}
      </span>
    </button>
  );
};

export default Button;
