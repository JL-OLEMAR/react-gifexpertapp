import PropTypes from 'prop-types'

export function GifItem({ title, url }) {
  return (
    <div className='card'>
      <img alt={title} src={url} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
