import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';


export const lightTheme = {
    background: '#f5f3bb',
    color: '#3f220f',
    buttonBackground: '#ff66b2',
  };
  
  export const darkTheme = {
    background: '#3f220f',
    color: '#dfa06e',
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
