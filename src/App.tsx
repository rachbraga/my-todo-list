import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import TaskList from './components/TaskList';
import * as S from './AppStyle'
import ThemeSwitch from './components/SwitchContainer';
import TipsRotator from './components/Tips'; // Importa o componente de dicas
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from './components/ThemeContext/index';
import titleDark from '../src/assets/titleDark.png'
import titleLigth from '../src/assets/titleLight.png'
import Modal from './components/Modal';



const App: React.FC = () => {
  const {  isDarkMode } = useTheme();
  const [openModal, setOpenModal] = useState(true);
  const tips = [
    { title: "Anote tudo", description: "Coloque no papel ou no aplicativo todas as tarefas que você precisa fazer." },
    { title: "Comece pelo que precisa ser feito primeiro", description: "Foque nas tarefas mais importantes ou urgentes logo de manhã." },
    { title: "Não exagere", description: "Mantenha a lista realista com poucas tarefas principais para não se sobrecarregar." },
    { title: "Faça pausas", description: "Inclua tempo para descansar entre as tarefas." },
    { title: "Risque o que já fez", description: "Marcar o que já foi feito dá uma sensação de progresso e motivação." },
    { title: "Revise à noite", description: "No final do dia, veja o que foi feito e o que ficou pendente para o próximo dia." },
  ];

  return (
    <>
      <GlobalStyles />
      <S.Container>
        {openModal && <S.ModalBackground/>}
        <S.Header>
          {openModal && 
          <Modal 
          title="Bem vindo(a)!"
          text="Organize suas atividades de forma simples e eficiente.
            Vamos começar a planejar seu dia e alcançar seus objetivos!"
            textButton='Vamos lá!'
          setOpen={setOpenModal}/>
          }
          <S.Title isDarkMode={isDarkMode}>
          <img src={isDarkMode ? titleDark : titleLigth} alt="Furry white cat sitting on a wall"/>
          </S.Title>
        </S.Header>
        <S.ContentTodo isDarkMode={isDarkMode}>
          <S.SwitchContainer>
            <FaRegSun /><ThemeSwitch /><FaRegMoon />
          </S.SwitchContainer>

          <S.ContentWrapper>
            <S.AppContainer isDarkMode={isDarkMode}>
              <TaskList />
            </S.AppContainer>
            <S.ContainerTips  isDarkMode={isDarkMode}>
            <TipsRotator tips={tips} /> 
            <S.ImageBook isDarkMode={isDarkMode}/>
            </S.ContainerTips>
          </S.ContentWrapper>
        </S.ContentTodo>
      </S.Container>
    </>
  );
};

export default App;
