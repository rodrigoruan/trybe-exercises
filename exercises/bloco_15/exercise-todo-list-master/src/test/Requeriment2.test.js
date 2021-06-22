import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando o botão de adicionar tarefa', () => {
  const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
  const { getByTestId, getByLabelText, getAllByTestId, getByText } = render(<App />);
  const sendButton = getByTestId('id-send-button');
  const inputTask = getByLabelText('Tarefa:');

  listTodo.forEach((task) => {
    fireEvent.change(inputTask, { target: { value: task } });
    fireEvent.click(sendButton);
  });

  const allTasks = getAllByTestId('id-task-saved');

  it('Verificando se as tarefas foram adicionadas ao digitar elas e clicar no botão', () => {
    expect(allTasks.length).toBe(3);
    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testando a aplicação, testando o botão de adicionar tarefa', () => {
  const { getByText } = render(<Item content='Comer tapioca' />);
  const inputValue = getByText('Comer tapioca');

  it('Verifica se ao passar um texto para o componente Item, o mesmo é renderizado', () => {
    expect(inputValue).toBeTruthy();
  });
});
