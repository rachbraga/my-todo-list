import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as S from './styles';

interface TaskItemProps {
  task: string;
  completed: boolean;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  onComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completed, onDelete, onEdit, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);

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

  return (
    <S.TaskItemContainer completed={completed}>
      {isEditing && !completed ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleEditSave} // Salva a edição quando o campo perde o foco
          onKeyDown={handleKeyDown} // Salva a edição quando a tecla Enter é pressionada
          autoFocus // Foca automaticamente no campo quando entra no modo de edição
        />
      ) : (
        <span
          onDoubleClick={() => {
            if (!completed) setIsEditing(true); // Permite entrar no modo de edição somente se a tarefa não estiver concluída
          }}
        >
          {task}
        </span>
      )}
      <S.IconsContainer>
        <S.Icon onClick={onComplete}>{completed ? '☑️' : '✅'}</S.Icon>
        {!completed && (
          <S.Icon onClick={() => setIsEditing(true)}>✏️</S.Icon> // Exibe o ícone de edição somente se a tarefa não estiver concluída
        )}
        <S.Icon onClick={onDelete}>🗑️</S.Icon>
      </S.IconsContainer>
    </S.TaskItemContainer>
  );
};

export default TaskItem;
