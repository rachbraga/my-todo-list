import React, { useState } from 'react';
import * as S from './styles'
import { useTheme } from '../ThemeContext/index';

interface AddTaskProps {
  addTask: (task: string, priority: 'low' | 'medium' | 'high') => void; 
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium'); 
  const {  isDarkMode } = useTheme();

  const handleAddTask = () => {
    if (task) {
      addTask(task, priority); 
      setTask('');
      setPriority('medium'); 
    }
  };

  return (
    <S.AddTaskContainer isDarkMode={isDarkMode}>
      <S.Input 
      isDarkMode={isDarkMode}
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()} 
        placeholder="Adicione uma nova tarefa" 
      />
      
      {/* Seletor de prioridade */}
      <S.Select 
        isDarkMode={isDarkMode}
        value={priority} 
        onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
      >
        <option value="low">Baixa</option>
        <option value="medium">Média</option>
        <option value="high">Alta</option>
      </S.Select>

      <S.Button isDarkMode={isDarkMode} onClick={handleAddTask}>+</S.Button>
    </S.AddTaskContainer>
  );
};

export default AddTask;
