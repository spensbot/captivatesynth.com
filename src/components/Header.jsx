import * as React from 'react'
import styled from 'styled-components'
import logo from '../../static/Thick.png'
import { mediaMinWidth } from './styled'

const speed = 0.1

export default function Header() {
  const [ease, setEase] = React.useState(1)

  React.useEffect(() => {
    const animate = () => {
      if (window.scrollY > 0 && ease > 0) {
        setEase(ease - speed)
      }
      if (window.scrollY === 0 && ease < 1) {
        setEase(ease + speed)
      }
    }

    window.addEventListener('scroll', animate)

    const handle = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(handle)
      window.removeEventListener('scroll', animate)
    }
  }, [ease])

  return (
    <Root
      style={{
        padding: `${ease * 0.5 + 0.0}rem 1rem`,
        backgroundColor: `rgba(0, 0, 0, ${1 - ease * 0.7})`,
      }}
    >
      <Title style={{ fontSize: `${ease * 0.7 + 1.3}rem` }}>Captivate</Title>
      <TitleIcon
        src={logo}
        style={{ width: `${ease * 0.7 + 2.0}rem` }}
        alt="Captivate Logo (an RGB cube)"
      ></TitleIcon>
      <Spacer />
      <SubTitle style={{ fontSize: `${ease * 0.5 + 1}rem` }}>
        Lighting and Visual Synth
      </SubTitle>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  color: #eee;
  flex-wrap: wrap;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 15px 0px #000000;
  box-shadow: 0px 0px 15px 0px #000000;
  z-index: 100;
`

const Title = styled.h1`
  /* font-size: 5rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 3rem;
  } */
`

const TitleIcon = styled.img`
  margin-left: 0.5rem;
  /* width: 5rem;
  @media (min-width: ${mediaMinWidth}) {
    width: 3rem;
  } */
`

const Spacer = styled.div`
  flex: 1 0 0;
`

const SubTitle = styled.h1`
  /* font-size: 3rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 2rem;
  } */
  color: #aaa;
`
