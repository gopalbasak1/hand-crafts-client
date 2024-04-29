import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  const { categories_name, image } = category;
  // Remove spaces from categories_name
//   const formattedCategoriesName = categories_name.replace(/\s+/g, ''); 

console.log(category);

  return (
    <NavLink to={`/categories/${categories_name}`}>
      <div className="card w-[300px] md:w-full mx-auto border-2  flex space-y-3 h-[230px]">
        <img src={image} className="w-full h-[150px] mx-auto" alt="" />
        <h2 className="pl-4">{categories_name}</h2>
      </div>
    </NavLink>
  );
};

export default Categories;
