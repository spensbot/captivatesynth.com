import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
  html {
    color: #080808;
    background-color: #000;
  }

  body {
    font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    background-color: #f8f8f8;
  }
`

// markup
export default function Page({ pageName, children, expandedHeader }) {
  return (
    <Root>
      <GlobalStyle />
      <title>Captivate Lighting and Visual Synth: {pageName}</title>
      <Header expanded={expandedHeader} />
      {children}
      <Footer />
    </Root>
  )
}

const Root = styled.main`
  position: relative;
`
