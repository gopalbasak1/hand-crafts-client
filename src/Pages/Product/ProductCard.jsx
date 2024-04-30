import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";


const ProductCard = ({ product, index }) => {
  const { user } = useContext(AuthContext);

  const { _id, name, photoUrl, description, price, category, time, stock } = product;

  const desc = description?.split("\n");



  return (
    <tr className="">
      
      <td className="hidden md:table-cell">{index}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td className="hidden md:table-cell">{price}</td>
      <td>
        <NavLink
          to={`/product/${_id}`}
          className="btn btn-primary btn-sm"
        >
          View Details
        </NavLink>
      </td>
    </tr>
  );
};

export default ProductCard;
