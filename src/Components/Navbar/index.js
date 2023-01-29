import React from 'react';
import Logo from '../../assets/img/today-logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} />
      </div>
      <nav>
        <ul>
          <li>News</li>
          <li>Opinion</li>
          <li>Life</li>
          <li>Business</li>
          <li>Magazine</li>
          <li>NewsLetter</li>
        </ul>
      </nav>
    </div>
  );
}
