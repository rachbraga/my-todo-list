import styled from 'styled-components';
import ligth from '../src/assets/lightBook.png';
import dark from '../src/assets/darkBook.png';

interface DarkModeApp {
  isDarkMode: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
  height: 100vh;
`;

export const ContentTodo = styled.div<DarkModeApp>`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 100px); 
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 50px;
  box-shadow: 0 8px 16px ${({ isDarkMode }) => (isDarkMode ? '#19180a' : 'rgba(0, 0, 0, 0.2)')};

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerTips = styled.div<DarkModeApp>`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 200px); 
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const AppContainer = styled.div<DarkModeApp>`
  width: 70%;
  padding: 2rem;
  border-radius: 15px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
  margin-right: 20px;

  
  ::-webkit-scrollbar {
    width: 6px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#ff66b2' : '#ffc2e0')};
    border-radius: 4px;
    border: 2px solid ${({ isDarkMode }) => (isDarkMode ? '#333' : '#f1f1f1')};
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#f1f1f1')};
  }

  
  scrollbar-width: thin;
  scrollbar-color: ${({ isDarkMode }) => (isDarkMode ? '#8c3608 #8d220c' : '#dfa06d   #f1f1f1')};

  @media (max-width: 768px) {
    max-height: 400px;
    margin-right: 0;
    width: 100%; 
  }
`;


export const Title = styled.div<DarkModeApp>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  margin-bottom: 10px;

  img {
    width: 550px;

    @media (max-width: 768px) {
      width: 100%; 
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  svg {
    margin: 0 10px;
  }
`;

export const ImageBook = styled.div<DarkModeApp>`
  width: 325px;
  height: 270px;
  border-radius: 10px;
  background-image: ${({ isDarkMode }) => (isDarkMode ? `url(${dark})` : `url(${ligth})`)};
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%; 
    height: auto;
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
