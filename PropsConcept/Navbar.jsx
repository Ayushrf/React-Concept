import React from "react";
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav>
                <img src="vite.svg" alt="svg/" id="navImg"/>
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Help</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;