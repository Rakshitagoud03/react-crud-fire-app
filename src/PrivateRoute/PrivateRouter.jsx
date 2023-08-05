import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter(props){
    const context = useContext(AuthContext)
    const currentUser = context.currentUser
    return(
        <React.Fragment>
            {
                currentUser ? <Outlet/> : <Navigate to={`/login`} />
            }
        </React.Fragment>
    )
}

export default PrivateRouter

/*
div, main, section, article, header, footer, aside - Html Block Elements
React fragment => virtual react block element
*/