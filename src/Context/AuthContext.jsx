import React, { createContext, useEffect,  useState, useCallback } from "react";
import Fireapp from "../Config/firebaseConfig";

// context ref
export const AuthContext = React.createContext();

// context provider
const AuthProvider = (props) => {
    // current user stage -> which carries login user credientials
    // null -> before login
    // login user information -> after login
    const [currentUser,setCurrentUser] = useState(null)
    const [pending,setPending] = useState(true)

    const initAuth = useCallback(() => {
        const getAuth = async () => {
            await Fireapp.auth().onAuthStateChanged((user) => {
                if(user){
                    setCurrentUser(user)
                    setPending(false)
                }else{
                    setCurrentUser(null)
                    setPending(false)
                }
            })
        }

        getAuth()
    },[currentUser])

    useEffect(() => {
        initAuth()
    },[initAuth])

    if(pending) {
        return(
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading....</span>
            </div>
        )
    }

    return(
        <AuthContext.Provider value={{ currentUser }}>
            {
                props.children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider