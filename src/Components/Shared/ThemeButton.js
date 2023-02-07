import React, { useContext } from 'react';
import ThemeContext from '../../theme';

export default function ThemeButton({ btnText }) {
  const { checkThemeIsLight } = useContext(ThemeContext);

  return (
    <div className={`btn btn-primary${checkThemeIsLight() ? '' : '-dark'}`}>
      {btnText}
    </div>
  );
}
