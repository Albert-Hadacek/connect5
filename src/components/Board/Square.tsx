import React from 'react'
import styled from 'styled-components'

const SquareContainer = styled.div`
  flex: 0 0 5.2%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 1px;
  &:before {
    content: '';
    display: table;
    padding-bottom: 100%;
  }
`

const SquareBody = styled.div`
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const SquareBodyTakenX = styled(SquareBody)`
  &:before {
    content: '✖';
    font-size: ${({ theme }) => theme.sizes.xxs};
    color: ${({ theme }) => theme.colors.warning};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const SquareBodyTakenO = styled(SquareBodyTakenX)`
  &:before {
    content: '⬤';
    font-size: ${({ theme }) => theme.sizes.xs};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
  }
`

interface Props {
  val: number
}

const Square: React.FC<Props> = () => (
  <SquareContainer>
    <SquareBody />
  </SquareContainer>
)

export default Square
