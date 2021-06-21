import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação, testando o botão de adicionar tarefa', () => {
  const { getByTestId, getByLabelText } = render(<App />);
  const sendButton = getByTestId('id-send-button');
  const inputTask = getByLabelText('Tarefa:');

  it('Verificando se o botão de adicionar tarefa existe', () => {
    expect(sendButton).toBeInTheDocument();
  });

  it('Verificando se o botão contém o texto "Adicionar"', () => {
    expect(sendButton.value).toBe('Adicionar');
  });

  fireEvent.change(inputTask, { target: { value: 'Fazer café' } });
  fireEvent.click(sendButton);

  const addedTask = getByTestId('id-task-saved');

  it('Verifica se após digitar uma tarefa no input e clicar no botão, salva a tarefa e limpa o input', () => {
    expect(inputTask.textContent).toBe('');
    expect(addedTask.textContent).toBe('Fazer café');
  });
});
