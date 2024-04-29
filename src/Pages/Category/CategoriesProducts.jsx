import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoriesProductCard from "./CategoriesProductCard";


const CategoriesProducts = () => {
  const { name } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/categories/${name}`)
      .then((response) => response.json())
      .then((data) => setBrandProducts(data));
  }, [name]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold"> {name}</h1>
      <div className="grid grid-cols-12">
        {brandProducts.map((product) => (
          <CategoriesProductCard className="" key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesProducts;
