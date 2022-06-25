import { useState } from 'react'

import { AddCategory, GifGrid } from './components'

export function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch'])

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory onNewCategory={handleAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
