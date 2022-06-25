import { useEffect, useState } from 'react'

import { getGifs } from '../services'

export function useFetchGifs(category) {
  const [state, setState] = useState({ images: [], isLoading: true })

  const { images, isLoading } = state

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({ images: imgs, isLoading: false })
    })
  }, [category])

  return { images, isLoading }
}
