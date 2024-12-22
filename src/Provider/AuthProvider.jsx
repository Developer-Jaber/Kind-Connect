import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/auth.init";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loder,setLoder] = useState(true);


    // Create User Using Email And Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user with email & password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login user with google
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }


    // focusd on user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoder(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    // user logout
    const userLogOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        loder,
        createUser,
        loginUser,
        loginWithGoogle,
        userLogOut
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;