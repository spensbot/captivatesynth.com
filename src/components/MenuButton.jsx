import * as React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'

export default function MenuButton() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Root>
      <MenuIcon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <Menu onClose={() => setIsOpen(false)} />}
    </Root>
  )
}

const Root = styled.div``

function Menu({ onClose }) {
  return (
    <>
      <MenuRoot>
        <CloseButton onClick={onClose} style={{ color: '#fff' }}>
          <CloseIcon style={{ margin: 0 }} />
        </CloseButton>
        <MenuItem href="/">HOME</MenuItem>
        <MenuItem href="/#download" onClick={onClose}>
          DOWNLOAD
        </MenuItem>
        <MenuItem href="/getting_started">GETTING STARTED</MenuItem>
        <MenuItem href="/terms_and_conditions">TERMS & CONDITIONS</MenuItem>
      </MenuRoot>
    </>
  )
}

const Dimmer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0005;
  z-index: 100;
`

const CloseButton = styled.div`
  padding: 1rem;
  margin: -1rem -1rem 0rem 0rem;
`

const MenuRoot = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 0;
  /* left: 0; */
  right: 0;
  background-color: #000;
  padding: 3rem;
  padding-bottom: 2rem;
`

const MenuItem = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  margin-bottom: 2rem;
  :hover {
    text-decoration: underline;
  }
`
