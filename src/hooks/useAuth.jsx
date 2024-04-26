import { useContext } from "react";
import AuthContextProvider from "../Context/AuthContextProvider";





const useAuth = () => {
    const all = useContext(AuthContextProvider);
    return all
};

export default useAuth;