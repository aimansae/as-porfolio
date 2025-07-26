import React from "react";
type FooterProps={
  className? :string
};
const Footer = ({className}:FooterProps) => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer className="text-sm p-2 w-full text-start  sm:text-center border-t border-gray-700 bg-gray-950 container mx-auto  text-gray-200">
      <span>
        &copy; 2025 Aiman Saeed Portfolio. All rights reserved. Inspired by
        webdecoded.
      </span>
    </footer>
  );
};

export default Footer;
