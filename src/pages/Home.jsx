import { Link } from "react-router-dom";
import "../styles/home.css"

function Home() {
    return (
        <main>
            <div className="home">
                <div className="content">
                    <h2 className="title-text">The finest and most stylish clothing collection you’ll find anywhere in the world</h2>
                    <h3 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet turpis vitae elit interdum tincidunt. Nulla facilisi, vestibulum neque ut convallis consectetur</h3>
                    <Link to="/shop" className="button">Start Shopping</Link>
                </div>
                <div className="preview">
                    <img src="src/assets/shoe.jpg" alt="Picture of Shoe" />
                </div>
            </div>
        </main>        
    );
}

export default Home;