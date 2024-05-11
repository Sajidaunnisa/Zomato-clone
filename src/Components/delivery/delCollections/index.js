import React, { Component } from "react";
import Slider from "react-slick";
import "./delCollection.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import DeliveryItem from "./deliveryItem";
import TopBrands from "./topbrands";

const deliveryItems = [
  {
    id: 1,
    img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    title: "Biryani",
  },
  {
    id: 2,
    img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    title: "Pizza",
  },
  {
    id: 3,
    img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    title: "Burger",
  },
  {
    id: 4,
    img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    title: "Chicken",
  },
  {
    id: 5,
    img: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    title: "Dosa",
  },
  {
    id: 6,
    img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    title: "Cake",
  },

  {
    id: 7,
    img: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    title: "Noodles",
  },
  {
    id: 8,
    img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    title: "Thali",
  },
  {
    id: 9,
    img: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    title: "Fried Rice",
  },
  {
    id: 10,
    img: "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
    title: "Shawarma",
  },
];

const topBrands = [
  {
    id: 1,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png",
    title: "Mehfil",
  },
  {
    id: 2,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png",
    title: "Shah Ghouse Hotel & Restaurant",
  },
  {
    id: 3,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png",
    title: "Pista House",
  },
  {
    id: 4,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png",
    title: "Paradise Biryani - A Legend Since 1953",
  },
  {
    id: 5,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png",
    title: "KFC",
  },
  {
    id: 6,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png",
    title: "Cream Stone Ice Cream",
  },
  {
    id: 7,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/98cd1bf571a1b58fdd9657a88f9342cf_1492593540.png",
    title: "Scoops Ice Cream",
  },
  {
    id: 8,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983679.png",
    title: "McDonald's",
  },
  {
    id: 9,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/91f550f3892cf36ce133bd2b6833f6f71703233325.png",
    title: "New Santosh Dhaba",
  },
  {
    id: 10,
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/2d813b5517c57e982563fe92ac286286_1646558284.png",
    title: "Karachi Bakery",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
      <div className="first-row">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
      <div className="second-row">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
          {topBrands.map((item) => {
            return <TopBrands item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
