import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  border: 1px solid blue;
  height: 90%;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const GameHistory = () => <Container>Game History</Container>

export default GameHistory
