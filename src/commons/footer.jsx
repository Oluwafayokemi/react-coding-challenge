import React from 'react'
import styled from 'styled-components'
import facebook from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import instagram from '../assets/social/instagram-white.svg'
import appStore from '../assets/store/app-store.svg'
import playStore from '../assets/store/play-store.svg'
import windowStore from '../assets/store/windows-store.svg'

export const Footer = () => (
  <Container>
    <div className='footer'>
      <div className='top'>
        <span>Home </span>|<span>Terms and Conditions</span> |
        <span>Privacy Policy</span> | <span>Collection Statement</span> |
        <span>Help</span> | <span>Manage account</span>
      </div>
      <div className='lighter'>
        <span>copywright@2016 DEMO streaming. All rights reserved.</span>
      </div>
    </div>
    <div className='logo'>
      <div className='social'>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter' />
        <img src={instagram} alt='instagram' />
      </div>
      <div className='store'>
        <img src={appStore} alt='App Store' />
        <img src={playStore} alt='Play Store' />
        <img src={windowStore} alt='Window Store' />
      </div>
    </div>
  </Container>
)
const Container = styled.div`
  position: fixed;
  width: 100%;
  max-width: 100%;
  height: max-content;
  left: 0px;
  bottom: 0px;
  background: #313848;
  .footer {
    padding: 2em;
    color: #fff;
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-left: 2em;

    span {
      margin-right: 10px;
      margin-left: 10px;
    }
    .top span {
      font-size: 16px;
    }
  }

  .logo {
    display: flex;
    justify-content: space-between;
    margin-left: 4em;
    margin-right: 4em;
    padding-bottom: 2em;
    .social {
      display: flex;
      justify-content: space-between;
      img {
        padding-right: 1em;
        width: 20px;
        cursor: pointer;
      }
    }

    .store{
        display: flex;
        justify-content: space-between;

        img {
            width: 150px;
            padding-right: 1em;
            cursor: pointer;
        }
    }
  }

  .lighter {
    font-size: 12px;
  }
`
