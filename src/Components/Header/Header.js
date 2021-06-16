import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
  return (
    <div className="header">
      <Link to = '/'>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
        className="header__icon"
      />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon/>
        <AccountCircleIcon/>
        <ExpandMoreIcon/>
      </div>

    </div>
  );
}

export default Header;
