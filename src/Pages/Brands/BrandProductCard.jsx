import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BrandProductCard = ({ product }) => {
  const { _id, name, photoUrl, description, price, category } = product;

  return (
    <div className="brand-product-card">
      <img src={photoUrl} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <NavLink to={`/product/${_id}`}>View Details</NavLink>
    </div>
  );
};

export default BrandProductCard;
