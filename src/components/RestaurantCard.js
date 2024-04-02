import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    costForTwo,
    cuisines,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="res-name">{name}</h3>
      <ul className="res-card-info">
        <li>{avgRating} stars</li>
        <li>{deliveryTime} min</li>
        <li>₹{costForTwo / 100} for two</li>
      </ul>
      <h5 className="res-card-cuisines">{cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestaurantCard;
