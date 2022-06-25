import { render, screen } from '@testing-library/react'

import { GifItem } from '../../src/components/GifItem.jsx'

describe('Tests in <GifItem />', () => {
  const title = 'Saitama'
  const url = 'https://giphy.com/gifs/yo3TC0yeHd53G'

  test('should match the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('should show the image with the indicated URL and ALT', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')

    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should display the title in the component', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
