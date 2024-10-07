import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem'; // ajuste o caminho conforme necessário
import ThemeContextProvider from '../components/ThemeContext';


describe('TaskItem Component', () => {
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();
  const mockOnComplete = jest.fn();
  const mockOnAddSubtask = jest.fn();
  const mockOnEditPriority = jest.fn();

  const defaultProps = {
    task: 'Estudar React',
    completed: false,
    onDelete: mockOnDelete,
    onEdit: mockOnEdit,
    onComplete: true,
    onAddSubtask: mockOnAddSubtask,
    priority: 'medium',
    onEditPriority: mockOnEditPriority,
  };

  const renderWithTheme = (isDarkMode = false) => {
    return render(
      <ThemeContextProvider value={{ toggleTheme: jest.fn(), isDarkMode }}>
        <TaskItem {...defaultProps} />
      </ThemeContextProvider>
    );
  };

  it('should render the task with correct priority', () => {
    renderWithTheme(false);
    
    expect(screen.getByText('Estudar React')).toBeInTheDocument();
    const priorityIndicator = screen.getByText('Média');
    expect(priorityIndicator).toBeInTheDocument();
  });

  it('should call onComplete when complete button is clicked', () => {
    renderWithTheme(false);
    
    const completeButton = screen.getByText('🟩');
    fireEvent.click(completeButton);
    
    expect(mockOnComplete).toHaveBeenCalled();
  });

  it('should call onDelete when delete button is clicked', () => {
    renderWithTheme(false);
    
    const deleteButton = screen.getByText('🗑️');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('should start editing when double-clicked and save on enter', () => {
    renderWithTheme(false);
    
    const taskText = screen.getByText('Estudar React');
    fireEvent.doubleClick(taskText);
    
    const input = screen.getByDisplayValue('Estudar React');
    fireEvent.change(input, { target: { value: 'Estudar JavaScript' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(mockOnEdit).toHaveBeenCalledWith('Estudar JavaScript');
    expect(input).not.toBeInTheDocument();  // input should disappear after saving
  });

  it('should change priority when priority indicator is clicked', () => {
    renderWithTheme(false);
    
    const priorityIndicator = screen.getByText('Média');
    fireEvent.click(priorityIndicator);
    
    const select = screen.getByDisplayValue('Média');
    fireEvent.change(select, { target: { value: 'high' } });
    
    expect(mockOnEditPriority).toHaveBeenCalledWith('high');
  });
});
