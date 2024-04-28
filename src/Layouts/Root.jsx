import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Shared/Footer/Footer";



const Root = () => {
    return (
        <div className="w-[400px] md:w-[768px] lg:w-[1320px] mx-auto mt-5">
            <Navbar/>
            <Outlet/>
            <Footer/>
            <div>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
        </div>
    );
};

export default Root;