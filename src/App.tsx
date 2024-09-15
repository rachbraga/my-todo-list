import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import styled from 'styled-components';
import TaskList from './components/TaskList';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #e0f7fa;
`;

const AppContainer = styled.div`
width: 100%;
max-width: 600px;
padding: 2rem;
background-color: #f9f9f9;
border-radius: 15px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
text-align: center;
margin-bottom: 1rem;
color: #ff66b2;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <AppContainer>
          <Title>MY TO-DO LIST</Title>
          <TaskList />
        </AppContainer>
      </Container>
    </>
  );
};

export default App;
