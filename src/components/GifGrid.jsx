import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks'

import { GifItem } from './GifItem.jsx'

export function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}

      <div className='card-grid '>
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
