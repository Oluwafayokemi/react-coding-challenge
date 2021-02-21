import React from 'react'
export const popUp = () => (
  <Container>
    <div className='pop-up'>
      <span>Demo Streaming</span>
      <span className="start">
        <span>Log in</span>
        <span>start Your free trial</span>
      </span>
    </div>
  </Container>
)

const Container = styled.div`
    .pop-up{
        display: flex;
        justify-content: space-between;
    }
    .start{
        display: flex
    }
`