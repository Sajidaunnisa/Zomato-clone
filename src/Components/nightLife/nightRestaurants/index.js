import React from "react";
import ExploreSection from "../../common/exploreSection";

const nightRestaurant = [
  {
    id: 1,
    image1:
      "https://b.zmtcdn.com/data/pictures/0/20728420/5c24d6409aec92703816a3004f055a66_featured_v2.jpg",
    name1: "Lake District Bar & Kitchen",
    rating1: "4.0",
    food1: "North indian, Chinese",
    price1: "1300 for two",
    deliverytime1: "6.5km",

    image2:
      "https://b.zmtcdn.com/data/pictures/4/18678114/fb99fe1028f0511794b7e3e39a157014_featured_v2.jpg",
    name2: "By The Bay",
    rating2: "4.3",
    food2: "Finger Food, Pizza",
    prise2: "1600 for two",
    deliverytime2: "6.3km",

    image3:
      "https://b.zmtcdn.com/data/pictures/1/20500001/894e95f53335b84c59e42ad2113f0974_featured_v2.jpg",
    name3: "The Neighbourhood",
    rating3: "4.3",
    food3: "North Indian, Continental,..",
    price3: "2000 for two",
    deliverytime3: "4km",
  },
  {
    id: 2,
    image1:
      "https://b.zmtcdn.com/data/pictures/chains/2/90302/7e9979b2f2f7cb04c865c4c541f75282_featured_v2.jpg",
    name1: "Ohri's Ming's Court",
    rating1: "4.6",
    food1: "Asian, Chinese, Seafood",
    prise1: "1,000 for two",
    deliverytime1: "4.3km",

    image2:
      "https://b.zmtcdn.com/data/pictures/9/18562409/bc85183d2683bb5b377cc255a0871340_featured_v2.jpg",
    name2: "HeadQuarters",
    rating2: "4.4",
    food2: "Continental, Chinese, Italia..",
    prise2: "1,800 for two",
    deliverytime2: "6.4km",

    image3:
      "https://b.zmtcdn.com/data/pictures/2/20565372/bccf6cabc04a24fa6c4ccfbb56ac6a99_featured_v2.jpg",
    name3: "Terrace",
    rating3: "4.3",
    food3: "Salad, North Indian",
    prise3: "1,000 for two",
    deliverytime3: "6.1km",
  },
  {
    id: 3,
    image1:
      "https://b.zmtcdn.com/data/pictures/5/20111025/d884abceb16a7ef24d0ca089b1c361f7_featured_v2.jpg",
    name1: "Rasa By Ashoka",
    rating1: "4.7",
    food1: "Mughlai, North indian",
    prise1: "2,400 for two",
    deliverytime1: "4.4km",

    image2:
      "https://b.zmtcdn.com/data/pictures/chains/9/90179/a81220d96b2565ecb13f8ae2f1eda57d_featured_v2.jpg",
    name2: "Bar One",
    rating2: "4.3",
    food2: "Bar Food, Kebab, North In..",
    prise2: "1,200 for two",
    deliverytime2: "6.7km",

    image3:
      "https://b.zmtcdn.com/data/pictures/chains/9/90129/4b7c4d47211b3f5c2b0348f89ba1d35c_featured_v2.jpg",
    name3: "Blue Fox",
    rating3: "4.1",
    food3: "North indian, Chinese, Con..",
    prise3: "1,900 for two",
    deliverytime3: "4.1km",
  },
  {
    id: 4,
    image1:
      "https://b.zmtcdn.com/data/pictures/8/18864418/12ac45301ed1fd6c4e554d0dd951e5b9_featured_v2.jpg",
    name1: "Crystal Restaurant & Bar",
    rating1: "4.2",
    food1: "Chinese, North Indian",
    prise1: "950 for two",
    deliverytime1: "5.1km",

    image2:
      "https://b.zmtcdn.com/data/pictures/7/90857/9acd99213abcb88464a78e254a6c583d_featured_v2.jpg",
    name2: "Hydrate The Bar",
    rating2: "4.3",
    food2: "North Indian, Chinese, Sic..",
    prise2: "1,400 for two",
    deliverytime2: "4.5km",

    image3:
      "https://b.zmtcdn.com/data/pictures/chains/4/90574/54d4a02a13cf26056f68491481e27566_featured_v2.jpg",
    name3: "The Waterfront",
    rating3: "4.1",
    food3: "Finger Food, Mughlai, Chi..",
    prise3: "1,400 for two",
    deliverytime3: "6.3km",
  },
];

const NightRestaurants = () => {
  return (
    <div>
      <div className="collection-title">
        Nightlife: Night clubs, pubs &amp; bar in Hyderabad
      </div>
      {nightRestaurant.map((restaurants) => {
        return <ExploreSection restaurants={restaurants} />;
      })}
    </div>
  );
};

export default NightRestaurants;
