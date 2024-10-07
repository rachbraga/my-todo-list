import React from 'react';
import * as S from './style';
import { useTheme } from '../ThemeContext/index';

interface ModalProps {
  setOpen: (open: boolean) => void;
  title:string;
  text:string;
  textButton: string;
}

const Modal: React.FC<ModalProps> = ({ setOpen, title, text, textButton}) => {
    const { isDarkMode } = useTheme();
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <S.Container isDarkMode={isDarkMode}>
        <S.Header> 
            <h2>{title}</h2>
            {/* <button onClick={closeModal}>X</button> */}
        </S.Header>
        <S.Body>
        {text}
        </S.Body>
        <S.Footer>
            <S.Button isDarkMode={isDarkMode} onClick={closeModal}> {textButton}</S.Button>
        </S.Footer>
    </S.Container>
  );
};

export default Modal;
