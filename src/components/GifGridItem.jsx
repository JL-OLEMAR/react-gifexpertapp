import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img alt={title} src={url} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
