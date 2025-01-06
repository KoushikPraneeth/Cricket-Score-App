import React, { useContext } from 'react';
    import ThemeContext from './ThemeContext';

    const ThemeToggleButton = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);

      return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      );
    };

    export default ThemeToggleButton;
