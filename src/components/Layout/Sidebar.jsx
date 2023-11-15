import React from "react";
import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from "./constant";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-neutral-500 w-60 p-3 flex flex-col text-white text-normal">
      <div>
        {SIDEBAR_LINKS.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
      </div>
      <div style={{ textAlign: "left", color: "#f9f9f9" }}>Support</div>
      <div>
        {SIDEBAR_BOTTOM_LINKS.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <div style={{ textAlign: "left", padding: "15px 0" }}>
      <Link to={item.path}>
        <span>{item.icon}</span>
        <span style={{ marginLeft: "20px", paddingTop: "5px" }}>
          {item.label}
        </span>
      </Link>
    </div>
  );
}
