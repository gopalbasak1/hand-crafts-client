/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { AuthContext } from "../../Context/AuthContextProvider";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Spinner/>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;