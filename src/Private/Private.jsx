import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const Private = ({children}) => {

    const {user} = useContext(AuthContext);

    if(user){
       return children
    }
    else{
       return <Navigate to='/login'></Navigate>
    }
};

export default Private;