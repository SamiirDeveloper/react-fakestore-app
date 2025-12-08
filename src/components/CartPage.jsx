import { useContext } from "react";
import { Cart } from "./CartContext";

export default function CartPage() {
  const { cart } = useContext(Cart);

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {cart.length}</p>
    </div>
  );
}