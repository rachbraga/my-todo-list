import styled from "styled-components";

interface DarkMode{
  isDarkMode: boolean;
}

export const Container = styled.div<DarkMode>`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 30%;
  top: 10%;
  z-index: 999;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#772014' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};

  @media (max-width: 768px) {
    width: 90%; /* Ajusta a largura para 90% da tela em dispositivos menores */
    left: 5%;   /* Centraliza o modal */
    top: 5%;    /* Diminui a distância do topo */
  }

  @media (max-width: 480px) {
    height: auto; /* Permite que a altura se ajuste automaticamente em telas muito pequenas */
    padding: 1rem;
  }
`;

export const Header = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`;

export const Body = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Footer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<DarkMode>`
  background: ${({ isDarkMode }) => (isDarkMode
    ? 'linear-gradient(90deg, hsla(21, 89%, 29%, 1) 0%, hsla(10, 84%, 30%, 1) 100%)'
    : 'linear-gradient(90deg, hsla(356, 74%, 52%, 1) 0%, hsla(27, 84%, 75%, 1) 0%, hsla(27, 64%, 65%, 1) 99%)')};
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Ajusta o tamanho da fonte para dispositivos menores */
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;