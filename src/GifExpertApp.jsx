import { useState } from 'react'

import { AddCategory } from './components/AddCategory.jsx'
import { GifGrid } from './components/GifGrid.jsx'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}
