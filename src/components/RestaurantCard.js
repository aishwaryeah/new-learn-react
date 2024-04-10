import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[300] bg-[#FFFAFA] hover:bg-white rounded-lg">
      <img
        className="res-logo rounded-sm"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="res-name">{name}</h3>
      <ul className="res-card-info">
        <li>{avgRating} stars</li>
        <li>{sla?.slaString}</li>
        <li>{costForTwo}</li>
      </ul>
      <h5 className="res-card-cuisines">{cuisines.join(", ")}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;
    return (
      <div>
        <label className="absolute text-white font-extrabold text-xl pt-36 pl-12">
          {aggregatedDiscountInfoV3?.header +
            " " +
            aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
