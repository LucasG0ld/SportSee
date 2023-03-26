import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css'
import Logo from '../../assets/logo.png'

/**
 * Component that displays the maine menu.
 * 
 * @component
 * @example
 * return (
 *    <Navbar />
 * )
 * @returns {JSX.Element}
 */

function Navbar() {

  return (
    <header>
        <nav className='sps-navbar'>
            <img src={Logo} className="sps-navbar-logo" alt="Logo SportSee" />
            <div className='sps-navbar-link'>
                <Link to="#">Accueil</Link>
                <Link to="#">Profil</Link>
                <Link to="#">Réglage</Link>
                <Link to="#">Communauté</Link>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;