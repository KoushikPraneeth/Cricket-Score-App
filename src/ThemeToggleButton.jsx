import React, { useContext } from 'react';
    import ThemeContext from './ThemeContext';
    import { FaSun, FaMoon, FaGamepad, FaPalette, FaTree, FaHeart } from 'react-icons/fa';
    import { IoMdColorFill } from 'react-icons/io';

    const ThemeToggleButton = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);

      const getIcon = () => {
        switch (theme) {
          case 'light':
            return <FaSun />;
          case 'dark':
            return <FaMoon />;
          case 'retro':
            return <FaGamepad />;
          case 'blue':
            return <IoMdColorFill style={{ color: '#2196f3' }} />;
          case 'green':
            return <FaTree style={{ color: '#4caf50' }} />;
          case 'pink':
            return <FaHeart style={{ color: '#e91e63' }} />;
          default:
            return <FaPalette />;
        }
      };

      return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {getIcon()}
        </button>
      );
    };

    export default ThemeToggleButton;
