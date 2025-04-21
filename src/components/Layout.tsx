import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
