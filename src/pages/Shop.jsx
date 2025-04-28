import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css"


function Shop(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false);
          } catch (error) {
            console.error("Failed to fetch products:", error);
          }
        };
    
        fetchProducts();
      }, []);

    
      return (
        <div className="shop-container">
          <h2 className="shop-title">Shop</h2>
          {loading ? (
            <p className="loading-text">Loading products...</p>
          ) : (
            <div className="product-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      );
}

export default Shop;