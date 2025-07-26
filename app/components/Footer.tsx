import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer className="  border-t border-gray-700 bg-gray-950 text-sm text-gray-400">
      <div className="container mx-auto px-4 py-4 md:text-center    ">
        <span className="font-medium text-white">Aiman Saeed</span> Portfolio.
        All rights reserved.© {year}
      </div>
    </footer>
  );
};

export default Footer;
