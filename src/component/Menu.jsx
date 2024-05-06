import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div style={{ padding: 25 }}>
            <ul>
                <li> <NavLink className={({isActive})=>isActive?"active-item":"pending-item"}  to="/">Home</NavLink> </li> 
                <li> <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about/10/ariyan">About</NavLink> </li>
                <li> <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink> </li>
            </ul>
        </div>
    );
};

export default Menu;