import { NavLink } from "react-router-dom";

const Brands = ({ brand }) => {
  const { categories_name, image } = brand;
  return (
    <NavLink to={`/brand/${(categories_name)}`}>
      <div className="card w-[300px] md:w-full mx-auto border-2  flex space-y-3 h-[230px]">
        <img src={image} className="w-full h-[150px] mx-auto" alt="" />
        <h2 className="pl-4">{categories_name}</h2>
      </div>
    </NavLink>
  );
};

export default Brands;
