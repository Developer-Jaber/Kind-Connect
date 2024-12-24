import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingPage from "../Pages/LodingPage";


const Private = ({children}) => {

    const {user, loder} = useContext(AuthContext);

    if(user){
       return children
    }else if(loder === true){
       return <LoadingPage></LoadingPage>
    }
    else{
       return <Navigate to='/login'></Navigate>
    }
};

export default Private;