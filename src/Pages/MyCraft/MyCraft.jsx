import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  const { user, loading } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);
  const [productsToDelete, setProductsToDelete] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Fetch crafts associated with the authenticated user's email
    const fetchCrafts = async () => {
      try {
        const response = await fetch(`https://hand-craft-server.vercel.app/myProducts/${user.email}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching crafts:", error);
        toast.error("Error fetching crafts");
      }
    };

    if (user) {
      fetchCrafts();
    }
  }, [user]);

  const handleDelete = (productId) => {
    const updatedProductsToDelete = [...productsToDelete];
    const index = updatedProductsToDelete.indexOf(productId);
    if (index !== -1) {
      updatedProductsToDelete.splice(index, 1);
    } else {
      updatedProductsToDelete.push(productId);
    }
    setProductsToDelete(updatedProductsToDelete);
  };

  const confirmDelete = (productId) => {
    return productsToDelete.includes(productId);
  };

  const handleConfirmDelete = (productId) => {
    fetch(`https://hand-craft-server.vercel.app/myProducts/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Craft Deleted Successfully");
        setItems(items.filter((item) => item._id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Error deleting product");
      });
    setProductsToDelete([]);
  };

  const cancelDelete = () => {
    setProductsToDelete([]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = filter === "All" ? items : items.filter((item) => item.customization === filter);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-[420px] md:w-full mx-auto">
      <Helmet>
        <title>hand Crafts | MyCraft </title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center">My Crafts</h2>
      <div className="text-center my-10 text-white bg-sky-500 w-[240px] mx-auto py-2 rounded-2xl">
        <label htmlFor="customizationFilter" className="mr-2 font-semibold text-2xl ">
          Customization:
        </label>
        <select
          id="customizationFilter"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border rounded-md focus:outline-[#238d53] bg-sky-500 border-none text-xl font-bold text-white"
        >
          <option className="font-bold" value="All">
            All
          </option>
          <option className="font-bold" value="Yes">
            Yes
          </option>
          <option className="font-bold" value="No">
            No
          </option>
        </select>
      </div>
      <div className=" md:flex justify-between items-center mb-4 w-[410px] md:w-full mx-auto"></div>
      <div className="grid md:grid-cols-2 gap-5">
        {filteredItems.map((p) => (
          <div key={p._id}>
            <div className="card card-side  bg-base-100 shadow-xl w-[380px] mx-auto md:w-full ">
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
                    <button className="btn bg-blue-500 text-[#fff]" onClick={() => handleConfirmDelete(p._id)}>
                      Confirm Delete
                    </button>
                    <button className="btn bg-red-500 text-[#ffff]" onClick={cancelDelete}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="btn font-bold uppercase bg-primary text-white" onClick={() => handleDelete(p._id)}>
                    Delete Product
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
