import React, { useState } from 'react';
import * as S from './styles'

interface AddTaskProps {
  addTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [task, setTask] = useState('');
  
    const handleAddTask = () => {
      if (task) {
        addTask(task);
        setTask('');
      }
    };
  
    return (
      <S.AddTaskContainer>
        <S.Input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()} 
          placeholder="Adicione uma nova tarefa" 
        />
        <S.Button onClick={handleAddTask}>+</S.Button>
      </S.AddTaskContainer>
    );
  };
  
  export default AddTask;