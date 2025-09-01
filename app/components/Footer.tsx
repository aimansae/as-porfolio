import React from "react";
type FooterProps = {
  className?: string;
};
const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      className={`${className} w-full border-t border-gray-700 p-2 text-gray-200 sm:text-center`}
    >
      <div className="container mx-auto flex items-center justify-center [font-family:var(--font-roboto)]">
        <span className="p-1 text-[10px] tracking-wide sm:text-sm">
          &copy; {year} Aiman Saeed Portfolio. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
