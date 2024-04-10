import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ catData }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
    // showItems === false ? setShowItems(true) : setShowItems(false);
  };
  return (
    <div className="bg-gray-100">
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-2 py-2 bg-white shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {catData.title} ({catData.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showItems && <ItemList items={catData.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
