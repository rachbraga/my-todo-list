import React, { useState, useEffect } from 'react';
import * as S from './styles'
import { useTheme } from '../ThemeContext/index';

const TipsRotator: React.FC<{ tips: { title: string; description: string }[] }> = ({ tips }) => {
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const { toggleTheme, isDarkMode } = useTheme();
  
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
      }, 10000); 
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(interval);
    }, [tips]);
  
    const currentTip = tips[currentTipIndex];
  
    return (
      <S.TipsContainer isDarkMode={isDarkMode}>
        <S.TipTitle>{currentTip.title}</S.TipTitle>
        <S.TipDescription>{currentTip.description}</S.TipDescription>
      </S.TipsContainer>
    );
  };
  
  export default TipsRotator;