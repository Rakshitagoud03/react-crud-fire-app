import React,{useContext} from 'react'
import { AuthContext } from '../../Context/AuthContext'
import {Outlet,Navigate} from 'react-router-dom'

function PrivateRouter(props){
    const context=useContext(AuthContext)
    const currentUser=context.currentUser
    return(
        <React.Fragment>
            {
                currentUser ? <Outlet/> : <Navigate to={`/login`}/>
            }
        </React.Fragment>
    )
}
export default PrivateRouter
/*
div,min,sec,article,footer,aside-HTML block eles
React fragment->virtual react block ele */