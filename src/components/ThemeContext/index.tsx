import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';


export const lightTheme = {
    background: '#f7eef1',
    color: '#333',
    buttonBackground: '#ff66b2',
  };
  
  export const darkTheme = {
    background: '#260913',
    color: '#f9f9f9',
    buttonBackground: '#6200ea',
  };

const ThemeContext = createContext<any>(null);

export const useTheme = () => useContext(ThemeContext);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
