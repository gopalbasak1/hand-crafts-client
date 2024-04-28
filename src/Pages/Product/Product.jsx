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
     
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-xl">
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadProduct ? (
              loadProduct.map((product, index) => {
                return <ProductCard product={product} key={product?._id} index={index + 1} />;
              })
            ) : (
              <tr>
                <td colSpan="6">No Products Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
