import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BrandProductCard from "./BrandProductCard"; // Import BrandProductCard

const BrandProducts = () => {
  const { name } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/brands/${name}`)
      .then((response) => response.json())
      .then((data) => setBrandProducts(data));
  }, [name]);

  return (
    <div>
      <h1>Brand: {name}</h1>
      <ul className="">
        {brandProducts.map((product) => (
          <BrandProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default BrandProducts;
