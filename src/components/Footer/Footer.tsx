import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 5vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs};
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xxs};
  }
`

interface Props {
  title: string
}

const Footer: React.FC<Props> = ({ title }) => (
  <Container>
    <Text>{title}</Text>
  </Container>
)

export default Footer
