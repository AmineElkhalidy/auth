import React from "react";
import Navbar from "./_components/Navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 items-center justify-center py-12">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default ProtectedLayout;
