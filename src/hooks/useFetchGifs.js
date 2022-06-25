import { useEffect, useState } from 'react'

import { getGifs } from '../services/getGifs.js'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true })

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({ data: imgs, loading: false })
    })
  }, [category])

  return state // {data:[], loading:true}
}
