import styled from 'styled-components';

interface TaskListProps {
  isDarkMode: boolean;
  progress?: number;
}

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .task-list .task-item {
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 1;

    &.adding {
      transform: translateY(-10px);
      opacity: 0;
    }
    
    &.added {
      transform: translateY(0);
      opacity: 1;
    }

    &.removing {
      transform: translateY(10px);
      opacity: 0;
    }
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const FilterButton = styled.button<TaskListProps>`
  background: ${({ isDarkMode }) => (isDarkMode ? 
    'linear-gradient(90deg, hsla(21, 89%, 29%, 1) 0%, hsla(10, 84%, 30%, 1) 100%)' : 
    'linear-gradient(90deg, hsla(356, 74%, 52%, 1) 0%, hsla(27, 84%, 75%, 1) 0%, hsla(27, 64%, 65%, 1) 99%)')};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  :hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#9e5d79' : '#ff99b5')};
    transform: translateY(-3px);
  }

  :active {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#ffc2e0' : '#fa84be')};
    transform: translateY(0);
  }

  @media (min-width: 600px) {
    padding: 0.75rem 1.5rem;
  }
`;

export const ProgressBar = styled.div<TaskListProps>`
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 5px;
`;

export const ProgressBarContainer = styled.div<TaskListProps>`
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
`;

export const ProgressBarFill = styled.div<TaskListProps>`
  height: 15px;
  width: ${({ progress }) => progress}%;
  background: ${({ isDarkMode }) => (isDarkMode ? 
    'linear-gradient(90deg, hsla(10, 84%, 30%, 1) 3%, hsla(27, 33%, 31%, 1) 70%, hsla(58, 14%, 49%, 1) 100%)' : 
    'linear-gradient(90deg, hsla(356, 71%, 47%, 1) 2%, hsla(27, 64%, 65%, 1) 70%, hsla(58, 74%, 85%, 1) 100%)')};
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
`;

export const ProgressBarText = styled.p`
  text-align: center;
`;

export const SubTaskContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const SubTaskInput = styled.input`
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const SubTaskButton = styled.button`
  padding: 8px;
  background-color: #a30d3d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #b05c73;
    transform: translateY(-3px);
  }

  &:active {
    background-color: #8b3349;
    transform: translateY(0);
  }
`;

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5); 
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;