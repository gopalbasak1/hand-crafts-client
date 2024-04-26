import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
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