import styled from 'styled-components';
import ligth from '../../assets/light.png'
import dark from '../../assets/dark.png'

interface TaskItemContainerProps {
    isDarkMode: boolean;
  }

export const TipsContainer = styled.div<TaskItemContainerProps>`
  margin-left: 2rem;
  padding: 1rem;
  width: 300px;
  height:150px;
  border-radius: 10px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#df2935' : '#86ba90')};

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:20px;
`;

export const TipTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-align:center;
`;

export const TipDescription = styled.p`
  font-size: 1rem;
  text-align:center;
`;
