import React from 'react';
import logo from '../images/logo.svg';

function Header(){
  return (
    <header className="header section">
      <a href="#" className="logo" src={logo}></a>
    </header>
  )
}

export default Header;