import React from "react";
import { Link } from 'react-router-dom';
import MyInput from "../input/MyInput";

const Navbar = () => {
    return(
        <nav className='navbar navbar-white'>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/about" >
                        <img src="/uploads/users/img3.jpg" alt=""/>
                        <span>Jaebalo</span>
                    </Link>
                </div>
                <div className="city__searcrh">
                    <MyInput placeholder="Город"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
