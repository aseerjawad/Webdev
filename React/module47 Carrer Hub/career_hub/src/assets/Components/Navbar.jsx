import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-3xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink> <li><a>Statistics </a></li></NavLink>
                        <NavLink to="featuredjobs"> <li><a>Applied Jobs </a></li></NavLink>
                        <NavLink> <li><a>Blog</a></li></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;