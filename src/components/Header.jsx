import * as React from 'react'
import styled from 'styled-components'
import logo from '../../static/Thick.png'
import { mediaMinWidth } from './styled'
import MenuButton from './MenuButton'
import zIndexes from '../zIndexes'

const speed = 0.1
const opacity = 0.7

export default function WrappedHeader({ expanded }) {
  if (expanded) {
    return <Header expanded fixed />
  } else {
    return (
      <>
        <Header invisible />
        <Header fixed />
      </>
    )
  }
}

function Header({ expanded, fixed, invisible }) {
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

  const outEase = expanded ? ease : 0

  // const backgroundColor = `rgba(0, 0, 0, ${1 - outEase * (1 - opacity)})`
  const backgroundColor = 'rgba(0, 0, 0, 1)'
  const boxShadow = `0px 0px 15px 0px ${backgroundColor}`

  return (
    <Root
      style={{
        position: fixed ? 'fixed' : undefined,
        padding: `${outEase * 1 + 0.5}rem 1rem`,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        WebkitBoxShadow: boxShadow,
        visibility: !invisible,
      }}
    >
      <FlexWrap onClick={(e) => (window.location.href = '/')}>
        <Title style={{ fontSize: `${outEase * 2 + 1.3}rem` }}>Captivate</Title>
        <TitleIcon
          src={logo}
          style={{ width: `${outEase * 0.7 + 2.0}rem`, opacity: 1 - outEase }}
          alt="Captivate Logo (a red, green, and blue cube)"
        ></TitleIcon>
        <Spacer />
        <SubTitle style={{ fontSize: `${outEase * 1 + 1}rem` }}>
          Lighting & Visual Synth
        </SubTitle>
      </FlexWrap>
      <div style={{ width: '1rem' }} />
      <MenuButton />
    </Root>
  )
}

const Root = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  color: #eee;
  box-sizing: border-box;
  z-index: ${zIndexes.header};
`

const Title = styled.h1`
  /* font-size: 5rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 3rem;
  } */
  margin: 0;
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
  margin: 0;
`

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  color: #eee;
  flex-grow: 1;
  flex-wrap: wrap;
  cursor: pointer;
`
