import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/auth.init";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);


    // Create User Using Email And Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;