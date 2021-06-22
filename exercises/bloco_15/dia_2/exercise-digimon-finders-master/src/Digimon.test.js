import React from 'react'
import { render } from '@testing-library/react'
import Digimon from './Digimon'

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', () => {
    const digimon = {
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
      name: 'Agumon',
    }

    const { getByTestId } = render(<Digimon digimon={digimon} />)
    const digimonContainer = getByTestId('digimonContainer')
    const digimonName = getByTestId('digimonName')
    const digimonLevel = getByTestId('digimonLevel')

    expect(digimonContainer).toBeInTheDocument()
    expect(digimonName.textContent).toBe('Agumon')
    expect(digimonLevel.textContent).toContain('Rookie')
  })
})
