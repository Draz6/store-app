import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/Collection.css";

export default function Card(props) {
  const { pic, name,  category, price, brand,model } = props;

  return (
    <>
      <div id="userCard">
        <img src={pic} alt="user-photo" />
        <h2>{name}</h2>
        <span className="brand">
          <StarIcon className="icon1" /> {brand}
        </span>
        <h5 className="model">{model}</h5>

        <h5>{category}</h5>
        <div className="add-to">
        <h3 className="price">{price}</h3>
        <button className="add-btn">Add <ShoppingCartIcon/></button>
        </div>
      </div>
    </>
  );
}
