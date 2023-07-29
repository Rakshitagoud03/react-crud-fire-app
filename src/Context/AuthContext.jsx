import React,{useState,useEffect,useContext,useCallback} from 'react'
//authcontext=>session management.
//context ref
export const AuthContext=React.createContext();

//context provider
const AuthProvider=(props)=>{
    //current user state->which carries login user credentials
    //null->login session not strted.=>before login
    //login user info->after login
    const [currentUser,setCurrentUser]=useState(null)       //null==store garbage val=> The Garbage value is a random value at an address in the memory of a computer

    return(
        <AuthContext.Provider value={{currentUser}}>
            {
                props.children
            }
        </AuthContext.Provider>
    )
}
export default AuthProvider