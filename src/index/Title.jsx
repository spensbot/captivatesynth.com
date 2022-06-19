import * as React from 'react'
import styled from 'styled-components'
import useBounds from '../hooks/useBounds'
import { opacity } from '../components/Header'
import logo from '../../static/Thick.png'
import { mediaMinWidth } from '../components/styled'

export default function Title() {
  return (
    <Root>
      <TitleIcon
        src={logo}
        alt="Captivate Logo (a red, green, and blue cube)"
      ></TitleIcon>
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

const TitleIcon = styled.img`
  margin-left: 0.5rem;
  width: 10rem;
  @media (min-width: ${mediaMinWidth}) {
    width: 10rem;
  }
`

const TitleText = styled.h1`
  position: absolute;
  left: 0;
  top: 0;
  padding: 1rem;
  font-size: 1rem;
`

const TitleTextContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, ${opacity});
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MuteButton = styled.button`
  border: none;
  cursor: pointer;
  color: #eee5;
  font-size: 5rem;
  width: 10rem;
  height: 10rem;
  :hover {
    color: #eee;
    border: 0.4rem solid #eee;
  }
  background-color: #0000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
`

const MuteWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
