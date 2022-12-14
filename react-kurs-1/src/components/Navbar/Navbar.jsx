import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <a className= {cl.item}>
                <NavLink to="/profile" className={navData=>navData.isActive? cl.activeLink: cl.item}>Profile </NavLink>
            </a>
            <a className= {cl.item}>
                <NavLink to="/dialogs" className={navData=>navData.isActive? cl.activeLink: cl.item}>Messages </NavLink>
            </a>
        </nav>
    )
}

export default Navbar;