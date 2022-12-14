import React from 'react';
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className= {cl.header}>
            <img
                src='https://e7.pngegg.com/pngimages/361/627/png-clipart-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf.png'/>
        </header>


    )
}

export default Header;