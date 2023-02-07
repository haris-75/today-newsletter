import React, { useContext } from 'react';
import ThemeContext from '../../theme';

export default function SecondaryContainer({ children }) {
  const { checkThemeIsLight } = useContext(ThemeContext);
  return (
    <div className={`secondary-container${checkThemeIsLight() ? '' : '-dark'}`}>
      {children}
    </div>
  );
}
