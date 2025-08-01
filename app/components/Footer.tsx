import React from "react";
type FooterProps = {
  className?: string;
};
const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      className={`${className}    w-full text-start  sm:text-center border-t border-gray-700 bg-gray-950   text-gray-200`}
    >
      <div className="container mx-auto  py-2">
        <span>
          &copy; {year} Aiman Saeed Portfolio. All rights reserved. Inspired by
          webdecoded.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
