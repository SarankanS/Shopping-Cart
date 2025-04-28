import { useState } from "react";
import "../styles/productcard.css";
import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const handleAdd = () => {
    addToCart(product, quantity);
    setQuantity(1); 
  };


  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) setQuantity(val);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>

      <div className="quantity-controls">
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          min="1"
        />
        <button onClick={increment}>+</button>
      </div>

      <button className="add-to-cart-btn" onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
