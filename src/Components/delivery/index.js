import React from "react";
import "./delivery.css";
import Filters from "../common/filters";
import DeliveryCollections from "./delCollections";
import ExploreSection from "../common/exploreSection";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: "Filters",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 2,
    icon: <i className="fi fi-sr-sort-alt"></i>,
    title: "Delivery Time",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Cuisines",
    icon: <i className="fi fi-rr-angle-small-down"></i>,
  },
];

const restaurants = [
  {
    id: 1,
    image1:
      "https://b.zmtcdn.com/data/pictures/5/20396145/8d880981302bd6da7945a0a0b38f4972_o2_featured_v2.jpg",
    name1: "Pista House - Cakes & Desserts",
    rating1: "4.1",
    food1: "Bakery, Dessert",
    price1: "150 for one",
    deliverytime1: "35 min",
    image2:
      "https://b.zmtcdn.com/data/pictures/0/19470170/5a1034a8a2e6ac2ee2d9509b21470a23_o2_featured_v2.jpg",
    name2: "Iqbal Cafe",
    rating2: "4.5",
    food2: "Hyderabadi Biryani",
    price2: "150 for one",
    deliverytime2: "28 min",
    image3:
      "https://b.zmtcdn.com/data/pictures/9/18631539/e27d24f3b5f1b3a150932ad927074aeb_o2_featured_v2.jpg",
    name3: "Agra Mithai Ghar & Restaurant",
    rating3: "4.1",
    food3: "Street Food, Sandwich",
    price3: "150 for one",
    deliverytime3: "35 min",
  },

  {
    id: 2,
    image1:
      "https://b.zmtcdn.com/data/pictures/chains/9/18423509/35a358a2f62f5f8cd33de6e6fc140dbd_o2_featured_v2.jpg",
    name1: "Oven Story Pizza",
    rating1: "4.3",
    food1: "Pizza, Italian, Pasta",
    price1: "150 for one",
    deliverytime1: "38 min",

    image2:
      "https://b.zmtcdn.com/data/pictures/3/20589343/5a5ec2e366bb432b79ac086ef0d1837e_o2_featured_v2.jpg",
    name2: "Grand Oven Bakrey & Cafe",
    rating2: "3.7",
    food2: "Dessert, Shawarma",
    price2: "150 for one",
    deliverytime2: "50 min",

    image3:
      "https://b.zmtcdn.com/data/pictures/3/19556033/fe9459fa94cddf8233823ab5f1e32ccd_o2_featured_v2.jpg",
    name3: "Shahran Hotel",
    rating3: "4.1",
    food3: "Biryani, North Indian",
    price3: "300 for one",
    deliverytime3: "29 min",
  },
  {
    id: 3,
    image1:
      "https://b.zmtcdn.com/data/pictures/4/20494524/16dc646cf84726cd5c088082fab16164_o2_featured_v2.jpg",
    name1: "Al Rabea Mandi House",
    rating1: "4.2",
    food1: "Mandi",
    price1: "300 for one",
    deliverytime1: "28 min",
    //

    image2:
      "https://b.zmtcdn.com/data/pictures/5/19891595/6d270c5961d575b31e79488869e9f363_o2_featured_v2.jpg",
    name2: "Al Akbar Fast Food Corner",
    rating2: "4.0",
    food2: "Chinese, drinks",
    price2: "300 for one",
    deliverytime2: "29 min",
    //

    image3:
      "https://b.zmtcdn.com/data/pictures/chains/2/91662/651b69964e2fbade94d28221d854aed5_o2_featured_v2.jpg",
    name3: "Paradise Biryani",
    rating3: "3.7",
    food3: "Biryani, kebab",
    price3: "300 for one",
    deliverytime3: "40 min",
  },
  {
    id: 4,
    image1:
      "https://b.zmtcdn.com/data/pictures/9/20921069/391ae471199480bf8eb0e38298e761a7_o2_featured_v2.jpg",
    name1: "Madina Hotel",
    rating1: "4.0",
    food1: "north Indian, Sea Food",
    price1: "300 for one",
    deliverytime1: "37 min",

    image2:
      "https://b.zmtcdn.com/data/pictures/3/20891973/82846d120a9b3ae033ad3647491a97c2_o2_featured_v2.jpg",
    name2: "Mr.Pulao",
    rating2: "3.",
    food2: "South indian",
    price2: "100 for one",
    deliverytime2: "46 min",

    image3:
      "https://b.zmtcdn.com/data/pictures/4/18620704/d4ee4e98f1a7ad553184de28a4cd97db_o2_featured_v2.jpg",
    name3: "Hotel Sohail",
    rating3: "4.3",
    food3: "Mughlai, Kebab",
    price3: "250 for one",
    deliverytime3: "33 min",
  },
];

const Delivery = () => {
  return (
    <div>
      <Filters filterList={deliveryFilters} />
      <DeliveryCollections />
      <div className="restaurant-card">
        {restaurants.map((restaurants) => {
          return <ExploreSection restaurants={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default Delivery;
