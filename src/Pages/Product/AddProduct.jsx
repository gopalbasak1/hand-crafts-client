import toast from "react-hot-toast";


const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photoUrl = form.photo.value;
    const time = form.time.value;
    const stock = form.stock.value;

    const inputData = {
      name,
      category,
      price,
      rating,
      description,
      photoUrl,
      time,
      stock
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Product Added successfully");
        }
        form.reset();
      });
   };
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="sect  py-4 w-full mx-auto">
        <div className="content space-y-5">
          <h2 className="text-center text-3xl"> Add Product</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form  lg:mx-40 mx-5 lg:my-10 space-y-4">
            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Item Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Subcategory_Name</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Sub Category Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="second flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Processing Time </span>
                </label>
                <input
                  type="number"
                  name="time"
                  placeholder="Enter Processing time"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter Product Rating"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Product Photo URL"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="option"
              >
                Stock Status
              </label>
              <select
                name="stock"
                id="stock"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                defaultValue="inStock" // Use defaultValue instead of selected
                >
                <option value="In Stock">In stock</option> {/* Use value prop */}
                <option value="Made to Order">Made to Order</option> {/* Use value prop */}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    {" "}
                    Short description
                  </span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Enter Short description"
                  className="input input-bordered w-full h-40"
                />
              </div>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Add Product"
                className="rounded-lg font-h2 border-2-[#331A15] bg-[#D2B48C] w-full p-3 font-bold text-[18px] text-[#331A15] cursor-pointer"
              />
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
