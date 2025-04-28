import { Link } from "react-router-dom";
import "../styles/header.css"
import { useCart } from "../context/CartContext"; 

function Header(){
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="header">
            <div className="left-h">
            <h1 className="title">My Shop</h1>
            </div>
            <nav className="middle-h">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart ({totalItems})</Link></li>
                </ul>
            </nav>
            <div className="right-h">
                <form>
                <i className="fas fa-search"></i>
                <input type="text" />
                </form>
                <div className="cart-icon">
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i> 
                </Link>                    
                </div>
                <button>Login</button>
            </div>

        </div>
    )
}
export default Header