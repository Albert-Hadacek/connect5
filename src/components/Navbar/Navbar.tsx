import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.h1`
  font-size: ${({ theme }) => theme.sizes.m};
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xs};
    letter-spacing: 1px;
  }
`

interface Props {
  title: string
}

const Navbar: React.FC<Props> = ({ title }) => (
  <Container>
    <Header>{title}</Header>
  </Container>
)

export default Navbar
