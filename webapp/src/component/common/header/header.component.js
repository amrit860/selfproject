import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';

const logout  = ()=>{
    localStorage.clear();
   
}
export const Header = function (props) {
    let navBar = props.isLoggedIn
        ?
         <ul className="nav_bar">
            <li className="nav_item">
                <Link to="/dashboard">Home</Link>
            </li>
            <li className="nav_item">
                <Link to="/about">About</Link>
            </li>
            <li className="nav_item">
                <Link to="/contact">Contact</Link>
            </li>
          

            <li className="nav_item float-right ">
                <button className="btn btn-black" onClick={logout} > <Link to="/">Logout</Link></button>
                {/* <Link to></Link> */}
               
            </li>
        </ul>
        :
        <ul className="nav_bar">
            <li className="nav_item">Home</li>
            <li className="nav_item">Login</li>
            <li className="nav_item">Register</li>
        </ul>
    return (
        navBar
    )
}

