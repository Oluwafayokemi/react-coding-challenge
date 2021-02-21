import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Footer } from '../commons/footer'
import { Header } from '../commons/header'
import { useEntriesState } from '../../entries.context'
import { sortValue } from '../util/sortFunction'

export const Movies = () => {
  const [movies, setMovies] = useState('')
  const [sorted, setSorted] = useState('')

  const state = useEntriesState()

  useEffect(() => {
    getMovies()
  }, [state?.entries])

  useEffect(() => {
    if (movies && movies[0]) {
      const sortedMovies = sortValue(movies, 'title')
      setSorted(sortedMovies)
    }
  }, [movies])

  const getMovies = () => {
    const filterMovies = state?.entries?.filter(
      entry => entry?.programType === 'movie' && entry?.releaseYear >= 2010
    )
    return setMovies(filterMovies)
  }
  const imgTag = 'Poster Art'

  const { loading, error } = state

  return (
    <Container>
      <Header />
      {error || !sorted ? (
        <div>...Oops something went wrong</div>
      ) : loading ? (
        <div>....loading</div>
      ) : (
        <div className='movie'>
          {sorted?.[0] &&
            sorted?.slice(0, 21).map((movie, index) => {
              const { images, title } = movie
              const imageFile = `${images?.[imgTag]?.url}`
              return (
                <div key={index} className='image'>
                  <img src={imageFile} alt={title} />
                  <div>{title}</div>
                </div>
              )
            })}
        </div>
      )}
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  padding: 4em;
  width: 100%;
  max-width: max-content;
  .movie {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    width: 98vw;
    padding-right: 0em;
    margin-right: 0;
    padding-bottom: 10em;
  }
  .image {
    width: 200px;
    height: 200px;
    padding-bottom: 3em;

    img {
      width: 150px;
      height: 200px;
      cursor: pointer;
    }
  }
`
