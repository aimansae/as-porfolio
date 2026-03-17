import React from "react";
type FooterProps = {
  className?: string;
};
const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      className={`${className} z-100 w-full border-t border-white/10 p-2 text-white-200 sm:text-center fixed bottom-0 bg-black`}
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
