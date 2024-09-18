// components/Header/header.js
import React from "react";
import "./header.css";

// Importing MUI icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Placeholder Netflix logo, replace with your own if needed
const NetflixLogo =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Header Left Section */}
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* Header Right Section */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountCircleIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
