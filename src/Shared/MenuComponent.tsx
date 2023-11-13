import { Link } from "react-router-dom";
import { useState } from "react";
import './Menu.css';

function MenuComponent() {

    return (
        <nav>
            <ul className="left-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Shorts</Link>
                </li>
                <li>
                    <Link to="/register">Subscription</Link>
                </li>
                <li>
                    <Link to="/register">Favourite</Link>
                </li>
                <li>
                    <Link to="/register">History</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MenuComponent;