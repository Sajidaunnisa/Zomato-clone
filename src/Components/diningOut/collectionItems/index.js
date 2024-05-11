import React from "react";
import "./collectionItem.css";

const CollectionItems = ({ item }) => {
  return (
    <div>
      <div className="collection-cover">
        <img src={item.image} className="collection-image" alt={item.name} />
        <p className="coll-name">{item.name}</p>
        <p className="places">
          {item.places}
          <i class="fi fi-ss-caret-right coll-icon"></i>
        </p>
      </div>
    </div>
  );
};

export default CollectionItems;
