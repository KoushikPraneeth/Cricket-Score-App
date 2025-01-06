import React, { useState } from 'react';
    import ThemeContext from './ThemeContext';

    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        const themes = ['light', 'dark', 'retro', 'blue', 'green', 'pink'];
        const currentThemeIndex = themes.indexOf(theme);
        const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
        setTheme(themes[nextThemeIndex]);
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
