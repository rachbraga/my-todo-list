import React from 'react';
import { useTheme } from '../ThemeContext/index';
import * as S from './style'

const ThemeSwitch: React.FC = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <S.SwitchContainer>
      <S.SwitchLabel>
        <S.SwitchInput 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={toggleTheme} 
        />
        <S.SwitchSlider />
      </S.SwitchLabel>
    </S.SwitchContainer>
  );
};

export default ThemeSwitch;
