import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  flex: 1;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const TimerBody = styled.div`
  font-size: ${({ theme }) => theme.sizes.m};
  padding: ${({ theme }) => theme.sizes.s};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xs};
    padding: ${({ theme }) => theme.sizes.xxs};
  }
`

const scaleUpAndDownAnimation = () => keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`

const TimerBodyWarning = styled.div`
  padding: ${({ theme }) => theme.sizes.s};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.warning};
  animation: ${scaleUpAndDownAnimation} 1s linear infinite;
  font-size: ${({ theme }) => theme.sizes.m};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xs};
    padding: ${({ theme }) => theme.sizes.xxs};
  }
`

const Timer = () => (
  <Container>
    <TimerBody>28:00</TimerBody>
  </Container>
)

export default Timer
