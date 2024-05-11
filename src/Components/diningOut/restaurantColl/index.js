import React from "react";
import ExploreSection from "../../common/exploreSection";

const restaurantColl = [
  {
    id: 1,
    image1:
      "https://b.zmtcdn.com/data/pictures/9/21040809/40c7ba6dc7b161066b52a76b90bbaddd_featured_v2.jpg?output-format=webp",
    name1: "Mings & Mee",
    rating1: "4.2",
    food1: "Chinese, Sushi, Asian",
    price1: "1,900 for two",
    deliverytime1: "6.1km",

    image2:
      "https://b.zmtcdn.com/data/pictures/0/20728420/5c24d6409aec92703816a3004f055a66_featured_v2.jpg?output-format=webp",
    name2: "Lake District Bar & Kitchen",
    rating2: "4.0",
    food2: "North indian, Chinese",
    price2: "1,300 for two",
    deliverytime2: "6.5km",

    image3:
      "https://b.zmtcdn.com/data/pictures/0/20763280/c35f7673a68c607b3f5655d362f53c62_featured_v2.jpg?output-format=webp",
    name3: "Moyaaah!",
    rating3: "4.5",
    food3: "Cafe, Burger, FastFood",
    price3: "1,150 for two",
    deliverytime3: "6km",
  },
  {
    id: 2,
    image1:
      "https://b.zmtcdn.com/data/pictures/chains/9/90499/7e74cc24888fda8a00bf37771a313e28_featured_v2.jpg?output-format=webp",
    name1: "Coffee Cup",
    rating1: "4.3",
    food1: "Cafe, Tea, Beverages",
    price1: "950 for two",
    deliverytime1: "6.5km",

    image2:
      "https://b.zmtcdn.com/data/pictures/1/20500001/894e95f53335b84c59e42ad2113f0974_featured_v2.jpg?output-format=webp",
    name2: "The Neighbourhood",
    rating2: "4.3",
    food2: "North Indian, Continental,..",
    price2: "2,000 for two",
    deliverytime2: "4km",

    image3:
      "https://b.zmtcdn.com/data/pictures/9/18631539/e27d24f3b5f1b3a150932ad927074aeb_o2_featured_v2.jpg",
    name3: "Agra Mithai Ghar & Restaurant",
    rating3: "4.1",
    food3: "Street Food, Sandwich",
    price3: "150 for one",
    deliverytime3: "4.7km",
  },
  {
    id: 3,
    image1:
      "https://b.zmtcdn.com/data/pictures/7/19538187/e6953099158c7699a0df1ca76b5619d1_featured_v2.jpg?output-format=webp",
    name1: "Parampara-Flavours Of India",
    rating1: "4.0",
    food1: "North Indian & Soth Indian",
    price1: "1,300 for two",
    deliverytime1: "6.1km",

    image2:
      "https://b.zmtcdn.com/data/pictures/0/19470170/5a1034a8a2e6ac2ee2d9509b21470a23_o2_featured_v2.jpg",
    name2: "Iqbal Cafe",
    rating2: "4.5",
    food2: "Hyderabadi Biryani",
    price2: "150 for one",
    deliverytime2: "8km",

    image3:
      "https://b.zmtcdn.com/data/pictures/8/18340498/c52983417209807d2187e938b5813b5a_featured_v2.jpg?output-format=webp",
    name3: "Cayenne-Mercure Hyderabad",
    rating3: "4.0",
    food3: "South Indian, North Indian",
    price3: "2,500 for two",
    deliverytime3: "6.1km",
  },
  {
    id: 4,
    image1:
      "https://b.zmtcdn.com/data/pictures/5/20396145/8d880981302bd6da7945a0a0b38f4972_o2_featured_v2.jpg",
    name1: "Pista House - Cakes & Desserts",
    rating1: "4.1",
    food1: "Bakery, Dessert",
    price1: "150 for one",
    deliverytime1: "5km",

    image2:
      "https://b.zmtcdn.com/data/pictures/2/91752/5ebceba21547577b3f873b2ccdee32a6_featured_v2.jpg?output-format=webp",
    name2: "Aish - The Park",
    rating2: "4.3",
    food2: "Hyderabadi, Andhra,Bir..",
    price2: "4,500 for two",
    deliverytime2: "6.5km",

    image3:
      "https://b.zmtcdn.com/data/pictures/5/18503675/030cff7a06ea8160bf42b9425dd7bab0_featured_v2.jpg?output-format=webp",
    name3: "Amogham Restaurant",
    rating3: "3.8",
    food3: "North India, Chinese",
    price3: "1,600 for two",
    deliverytime3: "5km",
  },
];

const RestaurantColl = () => {
  return (
    <div>
      <div className="collection-title">
        Trending dining out restaurants in Hyderabad
      </div>
      {restaurantColl.map((restaurants) => {
        return <ExploreSection restaurants={restaurants} />;
      })}
    </div>
  );
};

export default RestaurantColl;
