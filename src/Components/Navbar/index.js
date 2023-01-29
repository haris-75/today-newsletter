import React from 'react';
import Logo from '../../assets/img/today-logo.svg';
import Elipse from '../../assets/img/elipse.svg';

export default function Navbar() {
  const toggleTheme = () => {
    var element = document.getElementById('BODY');
    element.classList.toggle('light-theme');
    element.classList.toggle('dark-theme');
  };
  return (
    <div className="navbar">
      <img
        className="theme-toggler"
        onClick={() => toggleTheme()}
        src={Elipse}
        alt="elipse"
      />
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
