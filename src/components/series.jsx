import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Footer } from '../commons/footer'
import { Header } from '../commons/header'
import { useEntriesState } from '../../entries.context'

export const Series = () => {
  const [series, setSeries] = useState('')

  const state = useEntriesState()

  useEffect(() => {
    getSeries()
  }, [state.entries])

  const getSeries = async () => {
    const filterEntry =
      state?.entries?.filter(entry => {
        return entry?.releaseYear >= 2010 && entry?.programType === 'series'
      })
    setSeries(filterEntry)
  }
  const { loading, error } = state
  const imgTag = 'Poster Art'
  return (
    <Container>
      <Header />
      {error || !series ? (
        <div>...Oops something went wrong</div>
      ) : loading ? (
        <div>....loading</div>
      ) : (
        <div className='movie'>
          {series &&
            series?.[0] &&
            series.slice(0, 21).map((movieSeries, index) => {
              const { images, title } = movieSeries
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
