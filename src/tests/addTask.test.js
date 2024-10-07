import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from '../components/AddTask';
import ThemeContextProvider from '../components/ThemeContext';

describe('AddTask Component', () => {
    const mockAddTask = jest.fn(); // Mock da função addTask
  
    const renderWithTheme = () => {
      return render(
        <ThemeContextProvider>
          <AddTask addTask={mockAddTask} />
        </ThemeContextProvider>
      );
    };
  
    it('should add a task with the correct priority and reset input fields', () => {
      renderWithTheme(false);
  
    
      const input = screen.getByPlaceholderText('Adicione uma nova tarefa');
      fireEvent.change(input, { target: { value: 'Academia 13:30 ás 15h' } });
      expect(input).toHaveValue('Academia 13:30 ás 15h');
  
      const select = screen.getByDisplayValue('Média'); 
      fireEvent.change(select, { target: { value: 'high' } });
      expect(select).toHaveValue('high'); 
  
      const button = screen.getByText('+');
      fireEvent.click(button);
  
      expect(mockAddTask).toHaveBeenCalledWith('Academia 13:30 ás 15h', 'high');
  
      expect(input).toHaveValue('');
      expect(select).toHaveValue('medium');
    });
  
    it('should not add a task if the input is empty', () => {
      renderWithTheme(false); 
  
      const button = screen.getByText('+');
      fireEvent.click(button);
  
    
      expect(mockAddTask).not.toHaveBeenCalled();
    });
    
  
   
  });