import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const Container = styled.div`
  flex: 2;
  height: 90%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`

const BoardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: ${({ theme }) => theme.sizes.xs};
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Header = styled.h2`
  font-size: ${({ theme }) => theme.sizes.m};
  margin-bottom: ${({ theme }) => theme.sizes.xs};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xs};
    margin-bottom: ${({ theme }) => theme.sizes.xxs};
  }
`

const Button = styled.button`
  width: 75%;
  height: ${({ theme }) => theme.sizes.m};
  font-family: 'Nokia Cellphone FC', sans-serif;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 5px 0px #585858;
  transition: all ease 0.3s;
  position: relative;
  top: 0px;
  &:hover {
    opacity: 0.95;
  }
  &:active {
    box-shadow: 0px 2px 0px #585858;
    top: 2px;
  }
`

const Board: React.FC = () => (
  <Container>
    <Header>Red player's turn</Header>
    <BoardBody>
      {board.map((row) =>
        row.map((item) => <Square key={Math.random()} val={item} />)
      )}
    </BoardBody>
    <Button>3 time banks left</Button>
  </Container>
)

export default Board
