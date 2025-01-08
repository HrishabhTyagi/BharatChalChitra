import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

interface MenuComponentProps {
    isMenuOpen: boolean;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ isMenuOpen }) => {

    const defaultMenu = [{ path: '/', menuName: 'Home' },
    { path: '/register', menuName: 'Shorts' },
    { path: '/register', menuName: 'Subscription' },
    { path: '/register', menuName: 'Favourite' },
    { path: '/register', menuName: 'History' },
    ]
    const [menu, setMenu] = useState(defaultMenu);

    return (
        <nav className={isMenuOpen ? 'menu open' : 'menu'}>
            <ul className="left-menu">
                {
                    menu.map((m, index) => (
                        <li key={index}><Link to={m.path}>{m.menuName}</Link></li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default MenuComponent;
