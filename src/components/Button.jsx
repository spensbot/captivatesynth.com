import * as React from 'react'
import styled from 'styled-components'

export default function Button({ children }) {
  return <Root>{children}</Root>
}

const Root = styled.button`
  padding: 1.5rem 2rem;
  color: #fff;
  background-color: #55e;
  border: 2px solid #55e;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    border: 2px solid white;
  }
`
