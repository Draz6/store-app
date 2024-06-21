
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {
    return (
        <div id="nav"> 
            <ul id="navList"> 
                <h4 id="logo">D R &forall; Z</h4>
            </ul>
            <ul className='menu'>
                <a href="/LogIn"><li><Link to={"/LogIn"}>Home</Link></li></a>
                <li>Collection</li>
                <li><Link to={"/LogIn"}><PersonIcon /></Link></li>
                <li><ShoppingCartIcon /></li>
            </ul>
        </div>
    )
}