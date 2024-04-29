import { NavLink } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="error-section container m-auto my-20 px-2">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-8xl text-gray-400">404</span>
          <h1 className="text-4xl uppercase text-primary-color">
            Page not found
          </h1>
          <p className="text-lg">
            The page your are looking for does not exist. It might have been
            moved or delete.
          </p>
          <NavLink
            className="btn-effect rounded-lg bg-primary p-2 font-bold uppercase text-white"
            to="/"
          >
            <span>Go Back Home</span>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
