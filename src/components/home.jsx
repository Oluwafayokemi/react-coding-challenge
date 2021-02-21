import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Footer } from '../commons/footer'
import { Header } from '../commons/header'
import placeholder from '../assets/placeholder.png'
import history from '../util/history'
import { useEntriesDispatch } from '../../entries.context'
import { makeRequest, url } from '../../api'

const placeholders = [
  {
    id: 1,
    name: 'Series',
    image: placeholder
  },
  {
    id: 2,
    name: 'Movies',
    image: placeholder
  }
]

export const Home = () => {
  const dispatch = useEntriesDispatch()

  useEffect(() => {
    let loading = true
    const fetchData = async () => {
      try {
        loading = true
        const data = await makeRequest(url.getEntries)
        loading = false
        await dispatch({
          type: 'GET_ENTRIES',
          data: data?.entries,
          loading,
          error: data?.error
        })
      } catch (error) {
        throw Error(error)
      }
    }
    fetchData()
  }, [])

  const handleClick = name => {
    const route = `/${name.toLowerCase()}`
    history.push(route)
  }

  return (
    <Container>
      <Header />
      <div className='placeholder'>
        {placeholders.map(placeholder => {
          const { id, name, image } = placeholder
          return (
            <div className='holder' key={id} onClick={() => handleClick(name)}>
              <div className='img'>
                <div className='tag'>{name}</div>
                <img src={image} alt={name} />
              </div>
              <p>Popular {name}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  padding: 4em;
  .placeholder {
    display: flex;
    .holder {
      position: relative;
      .img {
        background-color: #1a1919;
        margin-right: 1em;
        width: 250px;
        height: 400px;
        display: flex;
        align-items: center;
      }
    }
    .tag {
      position: absolute;
      z-index: 1000;
      padding: 3em;
      display: flex;
      align-content: center;
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      cursor: pointer;
    }
  }
`
