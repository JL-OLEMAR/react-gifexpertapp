import { fireEvent, render, screen } from '@testing-library/react'

import { AddCategory } from '../../src/components/AddCategory.jsx'

describe('Tests in <AddCategory />', () => {
  test('should change the value of the Input', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')

    // Simulate a user typing in the input
    fireEvent.input(input, { target: { value: 'Saitama' } })
    expect(input.value).toBe('Saitama')
  })

  test('should call onNewCategory if the input have a value', () => {
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    // Simulate a user typing in the input
    fireEvent.input(input, { target: { value: inputValue } })

    // Simulate a user submitting the form
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    // Simulate a user submitting the form
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
