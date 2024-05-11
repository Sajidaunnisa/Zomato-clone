import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location">
            <div className="icon-location">
              <i className="fi fi-sr-marker absolute-center location-icon"></i>
              <div className="location-name">Hyderabad</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center caret-icon"></i>
          </div>
          <div className="search-container">
            <i className="fi fi-tr-tally-1 absolute-center line-icon"></i>
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurent, cuisine or a dish"
            ></input>
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="profile-img"
          ></img>
          <span className="user-name">Sajida</span>
          <i className="fi fi-rr-angle-small-down down-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
