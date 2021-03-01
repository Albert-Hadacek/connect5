import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      warning: string
      dark: string
      light: string
      blue: string
    }
    sizes: {
      xxs: string
      xs: string
      s: string
      m: string
      l: string
      xl: string
    }
  }
}

const lightTheme = {
  colors: {
    primary: '#FEE227',
    warning: '#bd2323',
    dark: '#303030',
    light: "#FFFFFF",
    blue: '#1313e6',
  },
  sizes: {
    xxs: '0.8rem',
    xs: '1rem',
    s: '1.5rem',
    m: '2rem',
    l: '3rem',
    xl: '4rem',
  },
}

interface Props {
  children: ReactNode
}

const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
)

export default Theme
