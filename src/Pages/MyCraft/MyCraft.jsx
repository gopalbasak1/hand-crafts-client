import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const MyCraft = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);
  // Store IDs of products to delete
  const [productsToDelete, setProductsToDelete] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/myProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  const handleDelete = (productId) => {
    const updatedProductsToDelete = [...productsToDelete];
    const index = updatedProductsToDelete.indexOf(productId);
    if (index !== -1) {
      // Remove product ID if already present
      updatedProductsToDelete.splice(index, 1);
    } else {
      // Add product ID to the list
      updatedProductsToDelete.push(productId);
    }
    setProductsToDelete(updatedProductsToDelete);
  };

  const confirmDelete = (productId) => {
    return productsToDelete.includes(productId);
  };

  const handleConfirmDelete = (productId) => {
    fetch(`http://localhost:5000/myProducts/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Craft Deleted Successfully");
        // Update state to remove the deleted product from items
        setItems(items.filter((item) => item._id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Error deleting product");
      });
    // Clear productsToDelete array
    setProductsToDelete([]);
  };

  const cancelDelete = () => {
    // Clear productsToDelete array
    setProductsToDelete([]);
  };

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((p) => (
        <div key={p._id}>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="h-[300px] w-[300px]" src={p.photoUrl} alt="Craft" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Craft Name: {p.name}</h2>
              <p>Price: {p.price}</p>
              <p>Processing: {p.time}</p>
              <p>Rating: {p.rating}</p>
              <p>Customization: {p.customization}</p>
              <p>Stock: {p.stock}</p>

              <NavLink
                to={`/update-product/${p._id}`}
                className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
              >
                <span className="font-bold uppercase text-white">Update Products</span>
              </NavLink>

              {confirmDelete(p._id) ? (
                <>
                  <p className="text-xl font-medium pb-2">Are you sure you want to delete this product?</p>
                  <button className="btn bg-blue-500 text-[#fff]" onClick={() => handleConfirmDelete(p._id)}>Confirm Delete</button>
                  <button className="btn bg-red-500 text-[#ffff]" onClick={cancelDelete}>Cancel</button>
                </>
              ) : (
                <button className="btn btn-primary" onClick={() => handleDelete(p._id)}>Delete Product</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCraft;
