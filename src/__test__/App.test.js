import App from '../App'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import axios from '../config/axios-config'

describe('tech events tests', () => {
  beforeEach(() => render(<App />))
  test('renders main page correctly', () => {
    //screen.debug();
    expect(true).toBeTruthy()
  })
})
