import React from 'react'
import styled from 'styled-components'
import history from '../util/history'

export const Header = () => (
  <Container>
    <span onClick={()=>history.push('/')}>Popular Titles</span>
  </Container>
)

const Container = styled.div`
  position: fixed;
  max-width: 100%;
  width:100%;
  height: fit-content;
  left: 0px;
  top: 0px;
  background: #313848;

  span {
    max-width: 100%;
  width:100%;
    padding: 1em;
    margin-left: 4em;
    color: #fff;
    display: flex;
    cursor: pointer;
  }
`
