import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as S from './styles';
import { useTheme } from '../ThemeContext/index';


interface TaskItemProps {
  task: string;
  completed: boolean;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  onComplete: () => void;
  onAddSubtask: (text: string) => void;
  priority: 'low' | 'medium' | 'high';
  onEditPriority: (newPriority : 'low'| 'medium' | 'high') => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completed, onDelete, onEdit, onComplete, priority,onEditPriority }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);
  const [editPriority, setEditPriority] = useState(priority);
  const [changePriority, setChangePriority] = useState (false)
  const { toggleTheme, isDarkMode } = useTheme();


  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    if (editText.trim() && !completed) {
      onEdit(editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSave();
    }
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newPriority = e.target.value as 'low' | 'medium' | 'high';
    setEditPriority(newPriority);
    onEditPriority(newPriority);
    setChangePriority(false)
  };

  return (
    <S.TaskItemContainer completed={completed} isDarkMode={isDarkMode}>
       <S.PriorityIndicator priority={priority} onClick={() => setChangePriority(!changePriority)}>
       { changePriority && <select value={editPriority} onChange={handlePriorityChange}>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>}
          </S.PriorityIndicator>
      {isEditing && !completed ? (
        <><input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleEditSave} 
          onKeyDown={handleKeyDown} 
          autoFocus 
        /></>
      ) : (
        <span
          onDoubleClick={() => {
            if (!completed) setIsEditing(true); 
          }}
        >
          {task}
        </span>
      )}
      <S.IconsContainer >
    
        <S.Icon onClick={onComplete}>{completed ? '✅':'🟩'  }</S.Icon>
        {!completed && (
          <S.Icon onClick={() => setIsEditing(true)}>✏️</S.Icon> 
        )}
        <S.Icon onClick={onDelete}>🗑️</S.Icon>
      </S.IconsContainer>
    </S.TaskItemContainer>
  );
};

export default TaskItem;
