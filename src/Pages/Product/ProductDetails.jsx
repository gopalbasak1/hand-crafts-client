import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const ProductDetails = () => {
  const [cartdata, setCartdata] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false); // State to handle delete confirmation

  
  const product = useLoaderData();
    
  const { _id, name, photoUrl, description, price, category, time, rating, stock } =
    product;

  const desc = description?.split("\n");

  const handleDelete = () => {
    if (confirmDelete) {
      fetch(`http://localhost:5000/product/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Product Deleted Successfully");
          // Redirect to home page after deletion
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          toast.error("Error deleting product");
        });
    } else {
      setConfirmDelete(true);
    }
  };

  const cancelDelete = () => {
    setConfirmDelete(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartdata(data);
      });
  }, []);

  const handleAddtoCart = () => {
    const matchProduct = cartdata.find((product) => product._id === _id);

    if (matchProduct) {
      toast("This Product already exists.");
    } else {
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Product Added to Cart");
        });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="product-details container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5 rounded-lg  p-2 xs:p-8">
          <div className="col-span-12 max-h-[500px] md:col-span-6">
            <div className="swiper swiper-top group relative flex items-center rounded-lg swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-5477c5a41d7b2dbe"
                aria-live="polite"
              >
                <div
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="swiper-zoom-container">
                    <img src={photoUrl} alt={name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="my-1 text-3xl font-bold">{name}</div>

            <div className="my-5 flex items-center justify-between gap-5">
              <div className="flex text-primary-color ">
                <span className="text-2xl font-semibold leading-7">
                  Price: {price}
                  {" ৳"}
                </span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Processing: </b>
                <span>{time}</span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Category: </b>
                <span>{category}</span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Rating: </b>
                <span>{rating}</span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Stock: </b>
                <span>{stock}</span>
              </div>
            </div>

            <div className="my-4">
        {/* Conditional rendering for delete confirmation */}
        {confirmDelete ? (
          <>
            <p className="text-xl font-medium pb-2">Are you sure you want to delete this product?</p>
            <button className="btn bg-blue-500 text-[#fff]" onClick={handleDelete}>Confirm Delete</button>
            <button className="btn bg-red-500 text-[#ffff]" onClick={cancelDelete}>Cancel</button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={handleDelete}>Delete Product</button>
        )}
      </div>

            <div className="my-4">
              <div className="clamp-5 break-all space-x-3">
                {/* <input
                  className="border-2 py-2 px-2 rounded-md w-20"
                  type="number"
                  name="cartqty"
                  id=""
                />{" "} */}
                <button
                  onClick={handleAddtoCart}
                  className="bg-success py-2 px-4 twct-white font-bold rounded-lg"
                >
                  Add to Cart
                </button>
                
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
              <h1 className="mb-[-2px] inline-block border-b-2 border-primary-color pb-3 text-xl font-bold uppercase">
                Description
              </h1>
            </div>
            <div className="see-more relative pb-5">
              <div className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
                <div className="see-more-content">
                  <ul>
                    {desc?.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
