import { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";



const SocialLogin = () => {

    const {googleLogin, githubLogin} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/'

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
           if(result.user){
            navigate(from)
           }
        })
    }

    return (
      <div>

            <div className="divider divider-info font-medium">Login with social accounts
            </div>
    
            <div className="flex items-center justify-center gap-10 mb-5">

            <div>
                <button
                onClick={()=>handleSocialLogin(googleLogin)}
                className="btn border-none text-4xl"><FcGoogle /></button>
            </div>

            <div>
                <button
                onClick={()=>handleSocialLogin(githubLogin)}
                className="btn btn-outline border-none text-4xl"><FaGithub /></button>
            </div>

            </div>

      </div>
    );
};

export default SocialLogin;