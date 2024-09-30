import React, { useState } from 'react';
import * as S from './styles';
import TaskItem from '../TaskItem';
import AddTask from '../AddTask';
import { useTheme } from '../ThemeContext/index';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface SubTask {
  id: number;
  text: string;
  completed: boolean;
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
  subtasks: SubTask[];
  priority: 'low' | 'medium' | 'high';
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const { toggleTheme, isDarkMode } = useTheme();

  const addTask = (text: string, priority: 'low' | 'medium' | 'high') => {
    const newTask: Task = { id: Date.now(), text, completed: false, subtasks: [], priority: priority};
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  const addSubtask = (taskId: number, text: string) => {
    setTasks(tasks.map((task) => 
      task.id === taskId
        ? { ...task, subtasks: [...task.subtasks, { id: Date.now(), text, completed: false }] }
        : task
    ));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(reorderedTasks);
  };

  const editPriority = (id:number, newPriority:'low' | 'medium' | 'high') => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, priority: newPriority} : task))
  }
console.log(tasks.filter(t => t.completed) )
  return (
    <div>
      <S.FiltersContainer>
        <S.FilterButton isDarkMode={isDarkMode} onClick={() => setFilter('all')}>Todos</S.FilterButton>
        <S.FilterButton isDarkMode={isDarkMode} onClick={() => setFilter('active')}>A Fazer</S.FilterButton>
        <S.FilterButton isDarkMode={isDarkMode} onClick={() => setFilter('completed')}>Concluídos</S.FilterButton>
      </S.FiltersContainer>

     <S.ProgressBarContainer isDarkMode={isDarkMode}>
      <S.ProgressBar isDarkMode={isDarkMode}>
        <S.ProgressBarFill 
          isDarkMode={isDarkMode} 
          progress={Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)} 
        />
      </S.ProgressBar>
      <S.ProgressBarText>
        {tasks.filter(t => t.completed).length > 0 ? `Progresso:  ${Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%` : ''}
      </S.ProgressBarText>
    </S.ProgressBarContainer>

      <AddTask addTask={addTask} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ ...provided.draggableProps.style }} 
                  >
                    <TaskItem
                      task={task.text}
                      completed={task.completed}
                      onDelete={() => deleteTask(task.id)}
                      onComplete={() => toggleCompleteTask(task.id)}
                      onEdit={(newText) => editTask(task.id, newText)}
                      onAddSubtask={(text: string) => addSubtask(task.id, text)}
                      onEditPriority={(newPriority) => editPriority(task.id, newPriority)} // Adicione esta linha
                      priority={task.priority}
                    />
                  </div>
                )}
              </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
