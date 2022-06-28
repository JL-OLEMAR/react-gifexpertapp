import { useState } from 'react'
import PropTypes from 'prop-types'

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    if (inputValue.trim().length <= 1) return

    setInputValue('')
    onNewCategory(inputValue.trim())
  }

  return (
    <form aria-label='form' onSubmit={onSubmit}>
      <input
        placeholder='Search gifs...'
        type='text'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
