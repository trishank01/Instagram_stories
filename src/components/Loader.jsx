// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
