import { ITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 py-6 border-b-2 border-gray-300 flex relative "
        >
          <div className="w-9/12">
            <div>
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <br></br>
              <span className="text-sm font-medium">
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
              <br></br>
              <span className="text-xs">
                {item?.card?.info?.ratings?.aggregatedRating !== ""
                  ? item?.card?.info?.ratings?.aggregatedRating?.rating
                  : " "}
              </span>
            </div>
            <p className="text-xs pb-6">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute bottom-8 right-3.5">
              <button className="px-2 pr-2 mr-2.5 ml-2.5 bg-white border border-gray-300 shadow-inner text-green-500 font-bold">
                ADD
              </button>
            </div>
            <img
              src={ITEM_IMG_URL + item?.card?.info?.imageId}
              className="w-24 h-24 absolute top-4 right-0"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
