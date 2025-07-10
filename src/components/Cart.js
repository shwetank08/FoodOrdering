import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../util/cartSlice";
import { useNavigate } from "react-router-dom";
import ItemCart from "../helper/ItemCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cartItems);
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {cartItems.length > 0 && (
        <div className="flex justify-end mb-4" data-testid = "clearCartBtn">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
          >
            Clear Cart
          </button>
        </div>
      )}

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <ItemCart data={item} index={index} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[70vh] text-center space-y-4">
          <h2 className="text-xl font-semibold">🛍️ Your cart is empty</h2>
          <p className="text-gray-600">
            You can go to the home page to view more restaurants.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;