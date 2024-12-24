import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../Pages/LodingPage";


const Private = ({children}) => {

    const {user, loder} = useContext(AuthContext);
    const location = useLocation();

    if(user){
       return children
    }else if(loder === true){
       return <LoadingPage></LoadingPage>
    }
    else{
       return <Navigate to='/login' state={location?.pathname}></Navigate>
    }
};

export default Private;