import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex justify-center align-items-center bg-${theme === 'light' ? 'white-100' : 'gray-800'} transition-colors duration-300`}>
        <button
          className={`w-60 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-800 text-gray-200 hover:bg-blue-900'}`}
          onClick={toggleTheme}
        >
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    </div>
  );
};

export default Settings;
