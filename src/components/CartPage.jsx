import { useContext } from "react";
import { Cart } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function CartPage() {
  const { cart } = useContext(Cart);

  return (
    <div>
      <h2>
        <FaShoppingCart style={{ marginRight: '8px', color: '#28a745' }} />
        Cart
      </h2>
      <p>Items in cart: {cart.length}</p>
    </div>
  );
}
