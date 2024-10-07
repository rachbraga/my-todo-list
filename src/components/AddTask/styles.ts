import styled from 'styled-components';

interface DarkMode{
  isDarkMode: boolean;
}

export const AddTaskContainer = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#772014' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Input = styled.input<DarkMode>`
  flex: 1;
  padding: 0.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#772014' : '#fff')};
  font-size: 1rem;
  border:none;

  @media (min-width: 600px) {
    margin-right: 1rem;
  }
`;

export const Select = styled.select<DarkMode>`
  padding: 5px;
  margin-left: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#772014' : '#fff')};
`;

export const Button = styled.button<DarkMode>`
  background: ${({ isDarkMode }) => (isDarkMode ? 
    'linear-gradient(90deg, hsla(21, 89%, 29%, 1) 0%, hsla(10, 84%, 30%, 1) 100%)' : 
    'linear-gradient(90deg, hsla(356, 74%, 52%, 1) 0%, hsla(27, 84%, 75%, 1) 0%, hsla(27, 64%, 65%, 1) 99%)')};
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;
