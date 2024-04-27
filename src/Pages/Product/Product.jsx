import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Product = () => {
  const loadProduct = useLoaderData();

  const [filterValue, setFilterValue] = useState(""); // State to store filter value

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    // You can implement filtering logic here
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10 lg:px-0 px-5">
      <div className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
        <h1 className="mb-[-2px] inline-block border-b-2 border-primary pb-3 text-2xl font-bold uppercase">
          Products
        </h1>
      </div>
      <div className="my-4">
        <label htmlFor="filter">Filter by Customization:</label>
        <select id="filter" value={filterValue} onChange={handleFilterChange}>
          <option value="">Select Customization</option>
          {/* Add options for filtering */}
        </select>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {loadProduct
          ? loadProduct?.map((product) => {
              return <ProductCard product={product} key={product?._id} />;
            })
          : "No Products Found"}
      </div>
    </div>
  );
};

export default Product;