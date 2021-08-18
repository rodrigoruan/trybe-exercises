import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('Teste da aplicação toda', () => {
  it('Simulando requisição na API', async () => {
    const { findByText, getByTestId } = render(<App />)
    const submitButton = getByTestId('buttonSearch')
    const inputText = getByTestId('input')

    const digimon = [
      {
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
        level: 'Rookie',
        name: 'Agumon',
      },
    ]

    global.fetch = jest.fn(async () => ({
      json: async () => digimon,
    }))

    fireEvent.change(inputText, { target: { value: 'Agumon' } })
    fireEvent.click(submitButton)

    await findByText('Agumon')
    await findByText('level: Rookie')
    expect(global.fetch).toBeCalled()
  })
})
