import styled from 'styled-components';

interface DarkMode{
  isDarkMode: boolean;
}

export const AddTaskContainer = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#fff')};
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
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#fff')};
  font-size: 1rem;

  @media (min-width: 600px) {
    margin-right: 1rem;
  }
`;
export const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
export const Button = styled.button`
  background-color: #ff66b2;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;
