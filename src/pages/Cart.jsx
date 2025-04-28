import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "1rem 0" }}>
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price per item: ${item.price}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
