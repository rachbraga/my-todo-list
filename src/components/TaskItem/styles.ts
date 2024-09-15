import styled from 'styled-components';

export const TaskItemContainer = styled.div<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: ${(props) => (props.completed ? '#d3ffd3' : '#fff')};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;

export const Icon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;
