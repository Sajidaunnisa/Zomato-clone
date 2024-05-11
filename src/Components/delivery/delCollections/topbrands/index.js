import React from "react";
import "./topBrands.css";

const TopBrands = ({ item }) => {
  return (
    <div>
      <div className="top-brands-cover">
        <img src={item.img} className="top-brands-image" alt={item.title} />
      </div>
      <div className="top-brands-title">{item.title}</div>
    </div>
  );
};

export default TopBrands;
