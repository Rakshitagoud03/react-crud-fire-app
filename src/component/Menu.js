import React,{useContext} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'    /* {}=>const/types/named imports */
import Fireapp, { AuthContext } from '../Context/AuthContext'
import{toast} from 'react-toastify'

function Menu(props){
    const context=useContext(AuthContext)
    const currentUser=context.currentUser

    const navigate=useNavigate()

    //logout logic
    const logoutUser=async()=>{
        if(window.confirm(`Are U sure to logout?`)){
            await Fireapp.auth().signOut()
            .then(res=>{
                toast.success("user logout successfully...");
                navigate(`/`);
            })
            .catch(err=>toast.error(err.message))
        }
    }
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">React-CRUD</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={
                    currentUser ? "collapse navbar-collapse justify-content-between":
                    "collapse navbar-collapse justify-content-end"
                }id="menu">
                    {
                        currentUser ? (
                            <React.Fragment>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={`/create`} className="nav-link">Create</NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link btn btn-danger">Logout</NavLink>
                                    </li>
                                </ul>
                            </React.Fragment>
                        ):(
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={`/login`} className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/register`} className="nav-link">Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
export default Menu