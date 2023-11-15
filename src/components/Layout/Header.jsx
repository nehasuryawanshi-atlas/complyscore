import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

export const Header = () => {
  return (
    <div className="bg-neutral-600 h-12 px-4 flex justify-between items-center">
      <div className="relative flex flex-row text-white">
        <MenuIcon style={{marginTop:"10px"}}/>
        <p style={{marginLeft:"10px",fontWeight:"bold",fontSize:"26px",color: "#639fe8"}}>Complyscore</p>
      </div>
      <div className="flex items-center gap-2 mr-2 text-white">
        <SearchIcon className="mr-10"/>
        <NotificationsIcon className="mr-10"/>
        <SettingsIcon className="mr-10"/>
        <PersonIcon className="mr-10"/>
      </div>
    </div>
  );
};
