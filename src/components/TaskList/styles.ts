import styled from 'styled-components';

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
  margin-top:15px;

  @media (min-width: 600px) {
    justify-content: space-around;
  }
`;

export const FilterButton = styled.button`
  background-color: #ffc2e0;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 0.75rem 1.5rem;
  }
`;
