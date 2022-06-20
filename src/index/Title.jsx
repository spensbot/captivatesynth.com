import * as React from 'react'
import styled from 'styled-components'
import useBounds from '../hooks/useBounds'
import { opacity } from '../components/Header'
// import logo from '../../static/Thick.png'
import { mediaMinWidth } from '../components/styled'
import { StaticImage } from 'gatsby-plugin-image'

export default function Title() {
  return (
    <Root>
      <StaticImage
        placeholder="none"
        src="../../static/Thick.png"
        width="10rem"
        height="10rem"
        alt="Captivate Logo (a red, green, and blue cube)"
      ></StaticImage>
    </Root>
  )
}

const Root = styled.div`
  color: #eee;
  background-color: #000;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
