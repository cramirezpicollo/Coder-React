import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>AUTOS ALTA GAMA</h1>

        <nav>
            <ul>
                <li>Mercedes Benz</li>
                <li>Audi</li>
                <li>Ferrari</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar