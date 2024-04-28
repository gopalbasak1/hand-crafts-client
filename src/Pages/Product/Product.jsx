import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Product = () => {
  const loadProduct = useLoaderData();
  const [showAllItems, setShowAllItems] = useState(false);

  const handleShowAllItems = () => {
    setShowAllItems(true);
  };

  return (
    <div className="w-[380px] md:w-full  mx-auto my-10 lg:px-0 px-5">
      <div className="liner-container mt-5 flex justify-center mx-auto w-[350px] md:w-full border-b-2 border-[rgba(119,119,119,.17)]">
        <h1 className="mb-[-2px] inline-block border-b-2 border-primary pb-3 text-2xl font-bold ">
          All Art & Craft Items
        </h1>
      </div>
     
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="md:text-xl">
              <th className="hidden md:table-cell">No</th>
              <th>Name</th>
              <th>Category</th>
              <th className="hidden md:table-cell">Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {showAllItems && loadProduct ? (
              loadProduct.map((product, index) => {
                return <ProductCard product={product} key={product?._id} index={index + 1} />;
              })
            ) : (
              // Show at least 5 items if not showing all
              loadProduct.slice(0, 5).map((product, index) => {
                return <ProductCard product={product} key={product?._id} index={index + 1} />;
              })
            )}
          </tbody>
        </table>
      </div>
      {!showAllItems && (
        <div className="flex">
          <button onClick={handleShowAllItems} className="btn btn-primary mx-auto ">Show All Items</button>
        </div>
      )}
    </div>
  );
};

export default Product;
