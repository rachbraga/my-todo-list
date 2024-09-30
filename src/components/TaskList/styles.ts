import styled from 'styled-components';

interface TaskListProps {
  isDarkMode: boolean;
  progress?: number ;
}

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const FilterButton = styled.button<TaskListProps>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#ff66b2' : '#ffc2e0')};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  
  :active {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#ffc2e0' : '#fa84be')};
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
  background: ${({ isDarkMode }) => (isDarkMode ? 'linear-gradient(144deg, rgba(156,16,47,1) 18%, rgba(11,23,173,1) 66%);' : ' linear-gradient(144deg, rgba(218,31,72,1) 18%, rgba(6,176,243,1) 66%)')};
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #b05c73;
  }
`;
