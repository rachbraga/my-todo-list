import styled from 'styled-components';

interface TaskItemContainerProps {
  completed: boolean;
  isDarkMode: boolean;
}
export const PriorityIndicator = styled.div<{ priority: 'low' | 'medium' | 'high' }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ priority }) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'transparent';
    }
  }};
  margin-right: 10px;
`;
export const TaskItemContainer = styled.div<TaskItemContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#772014' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  border: 1px solid ${({ completed }) => (completed ? '#19180a':'##772014')};
  opacity:${({ completed }) => (completed ? '0.5' : '1')};
  border-radius: 4px;

  span {
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
    cursor: pointer;
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
