import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="logo w-36" src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "✖️"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
