import React from 'react'
import styled from 'styled-components'

import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import GlobalStyle from '../styles/GlobalStyle'
import Theme from '../styles/Theme'
import GameHistory from './GameHistory/GameHistory'
import Board from './Board/Board'
import Timer from './Timer/Timer'
import { StateContext } from '../state/context'

const MainContainer = styled.div`
  margin: 0 auto;
  height: 85vh;
  width: 100%;
  padding: 10px;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`

const App = () => (
  <StateContext.Provider>
    <GlobalStyle />
    <Theme>
      <Navbar title="Connect Five Masters" />
      <MainContainer>
        <GameHistory />
        <Board />
        <Timer />
      </MainContainer>
      <Footer title="Created by Albert Hadacek" />
    </Theme>
  </StateContext.Provider>
)

export default App
