import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="px-2 m-2 bg-black text-white rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart</h1>}
      <div className="w-9/12 mx-auto text-left bg-white">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
