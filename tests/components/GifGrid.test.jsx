import { render, screen } from '@testing-library/react'

import { useFetchGifs } from '../../src/hooks/useFetchGifs.js'
import { GifGrid } from '../../src/components/GifGrid.jsx'

jest.mock('../../src/hooks/useFetchGifs.js')

describe('Tests in <GifGrid />', () => {
  const category = 'DBZ'

  test('should show the loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })

  test('should show the gifs when they are loaded since the useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Avatar',
        url: 'https://media1.giphy.com/media/3o7btLqYqjQQQqQqZS/giphy.gif'
      },
      {
        id: 'DEF',
        title: 'Star Wars',
        url: 'https://media1.giphy.com/media/3o7btLqYqjQQQqQqZS/giphy.gif'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
