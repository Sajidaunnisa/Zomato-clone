import React, { useState } from "react";
import Header from "../../Components/common/header";
import TabOptions from "../../Components/common/tabOptions";
import Footer from "../../Components/common/footer";
import Delivery from "../../Components/delivery";
import DiningOut from "../../Components/diningOut";
import Nightlife from "../../Components/nightLife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Dining Out");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Dining Out":
      return <DiningOut />;

    case "Delivery":
      return <Delivery />;

    case "Nightlife":
      return <Nightlife />;

    default:
      return <DiningOut />;
  }
};
export default HomePage;
