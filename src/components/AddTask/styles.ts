import styled from 'styled-components';

export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;

  @media (min-width: 600px) {
    margin-right: 1rem;
  }
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
