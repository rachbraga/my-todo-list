import React, { useState } from 'react';
import * as S from './styles'
import TaskItem from '../TaskItem';
import AddTask from '../AddTask';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div>
      <AddTask addTask={addTask} />
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.text}
          completed={task.completed}
          onDelete={() => deleteTask(task.id)}
          onComplete={() => toggleCompleteTask(task.id)}
          onEdit={(newText) => editTask(task.id, newText)}
        />
      ))}
      <S.FiltersContainer>
        <S.FilterButton onClick={() => setFilter('all')}>Todos</S.FilterButton>
        <S.FilterButton onClick={() => setFilter('active')}>A Fazer</S.FilterButton>
        <S.FilterButton onClick={() => setFilter('completed')}>Concluídos</S.FilterButton>
      </S.FiltersContainer>
    </div>
  );
};

export default TaskList;
