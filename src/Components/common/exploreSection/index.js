import React from "react";
import "./exploreSection.css";

const ExploreSection = ({ restaurants }) => {
  return (
    <div className="card">
      <div className="container">
        <div className="img-container">
          <img
            src={restaurants.image1}
            className="img"
            alt={restaurants.name1}
          />
        </div>
        <div className="details-container">
          <div className="restaurant-details">
            <div className="restaurant-name">{restaurants.name1}</div>
            <div className="rating">
              {restaurants.rating1}
              <i class="fi fi-ss-star star-icon"></i>
            </div>
          </div>
          <div className="other-details">
            <div className="food">{restaurants.food1}</div>
            <div className="price">
              <i class="fi fi-sr-indian-rupee-sign rupee-icon"></i>
              {restaurants.price1}
            </div>
          </div>
          <div className="delivery-time">{restaurants.deliverytime1}</div>
        </div>
      </div>
      <div className="container">
        <div className="img-container">
          <img
            src={restaurants.image2}
            className="img"
            alt={restaurants.name2}
          />
        </div>
        <div className="details-container">
          <div className="restaurant-details">
            <div className="restaurant-name">{restaurants.name2}</div>
            <div className="rating">
              {restaurants.rating2}
              <i class="fi fi-ss-star star-icon"></i>
            </div>
          </div>
          <div className="other-details">
            <div className="food">{restaurants.food2}</div>
            <div className="price">
              <i class="fi fi-sr-indian-rupee-sign rupee-icon"></i>
              {restaurants.price2}
            </div>
          </div>
          <div className="delivery-time">{restaurants.deliverytime2}</div>
        </div>
      </div>
      <div className="container">
        <div className="img-container">
          <img
            src={restaurants.image3}
            className="img"
            alt={restaurants.name3}
          />
        </div>
        <div className="details-container">
          <div className="restaurant-details">
            <div className="restaurant-name">{restaurants.name3}</div>
            <div className="rating">
              {restaurants.rating3}
              <i class="fi fi-ss-star star-icon"></i>
            </div>
          </div>
          <div className="other-details">
            <div className="food">{restaurants.food3}</div>
            <div className="price">
              <i class="fi fi-sr-indian-rupee-sign rupee-icon"></i>
              {restaurants.price3}
            </div>
          </div>
          <div className="delivery-time">{restaurants.deliverytime3}</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
