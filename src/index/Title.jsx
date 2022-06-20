import * as React from 'react'
import styled from 'styled-components'
import useBounds from '../hooks/useBounds'
import { opacity } from '../components/Header'
// import logo from '../../static/Thick.png'
import { mediaMinWidth } from '../components/styled'
import { StaticImage } from 'gatsby-plugin-image'
import randoCirclesSvg from '../components/randoCirclesSvg'

const GRADIENT_KEY = 'is-gradient'

export default function Title() {
  return (
    <Root gradient={Math.random() > 0.5}>
      <StarWrapper style={{ animationDuration: '200000ms' }}>
        <Stars />
      </StarWrapper>
      <Logo>
        <StaticImage
          placeholder="none"
          src="../../static/Thick.png"
          width={150}
          height={150}
          alt="Captivate Logo (a red, green, and blue cube)"
        ></StaticImage>
      </Logo>
    </Root>
  )
}

function Stars() {
  return (
    <img
      width="100%"
      height="100%"
      src={`data:image/svg+xml;utf8,${randoCirclesSvg(100, 100)}`}
    />
  )
}

const Logo = styled.div`
  position: absolute;
`

const StarWrapper = styled.div`
  width: 200%;
  height: 200%;
  mask-image: radial-gradient(circle at center, #ffff, #fff0, #fff0);
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* background: radial-gradient(#fd73ff, #726f35); */
`

const Root = styled.div`
  color: #eee;
  background-color: #000;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: radial-gradient(#ff00ee, #ffd500); */
  background: ${(props) =>
    props.gradient ? `linear-gradient(to right, #bb00a5, #c3ca00)` : ''};
`
