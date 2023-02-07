import React, { useContext } from 'react';
import Logo from '../../assets/img/today-logo.svg';
import ElipseBlack from '../../assets/img/elipse-black.svg';
import ElipseWhite from '../../assets/img/elipse-white.svg';
import ThemeContext from '../../theme';

export default function Navbar() {
  const { checkThemeIsLight, toggleStyle } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <img
        className="theme-toggler"
        onClick={() => toggleStyle()}
        src={checkThemeIsLight() ? ElipseBlack : ElipseWhite}
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
