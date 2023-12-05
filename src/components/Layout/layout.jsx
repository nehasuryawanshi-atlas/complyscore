import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex flex-row bg-neutral-100 h-screen">
        <Sidebar />
        <div className="p-4">
          <div>{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};
