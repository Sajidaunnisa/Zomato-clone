import React from "react";
import Filters from "../common/filters";
import Slider from "react-slick";
import CollnextArrow from "../common/carousel/collnextArrow";
import CollprevArrow from "../common/carousel/collprevArrow";
import CollectionItems from "../diningOut/collectionItems";
import NightRestaurants from "./nightRestaurants";

const collectionFilters = [
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
    title: "Gold",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const collectionsItems = [
  {
    image:
      "https://i.pinimg.com/236x/37/07/25/370725a888811a47c5b8ad1d454c5891.jpg",
    name: "Best of live screenings",
    places: "29 Places",
  },
  {
    image:
      "https://i.pinimg.com/236x/9c/85/50/9c8550621642f1744920aa40c4ca6489.jpg",
    name: "Regional Flavours",
    places: "23 Places",
  },
  {
    image:
      "https://i.pinimg.com/236x/4c/de/48/4cde4899f21cee09e3be851f00a5d9ed.jpg",
    name: "Legends of Hyd",
    places: "24 Places",
  },
  {
    image:
      "https://i.pinimg.com/236x/10/08/0c/10080c37d1dbe21457989cd296252070.jpg",
    name: "Authentic Mandi",
    places: "9 Places",
  },
  {
    image:
      "https://i.pinimg.com/236x/2d/82/8f/2d828f21fd6c829f8ee9698e3b7f205b.jpg",
    name: "Top Breakfast Spots",
    places: "15 Places",
  },
  {
    image:
      "https://i.pinimg.com/236x/d1/22/3d/d1223ddaeca7694d75787c081f328ec5.jpg",
    name: "Lit Party Places",
    places: "13 Places",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CollnextArrow />,
  prevArrow: <CollprevArrow />,
};

const Nightlife = () => {
  return (
    <div>
      <div className="collections">
        <div className="collection-title">Collections</div>
        <div className="title-discription">
          <p className="discription">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Hyderabad, based on trends
          </p>
          <p className="more-collections">
            All collections in Hyderabad
            <i class="fi fi-ss-caret-right more-icon"></i>
          </p>
        </div>
        <Slider {...settings}>
          {collectionsItems.map((item) => {
            return <CollectionItems item={item} />;
          })}
        </Slider>
      </div>
      <Filters filterList={collectionFilters} />
      <NightRestaurants />
    </div>
  );
};

export default Nightlife;
