import * as React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from './Menu'

export default function MenuButton({ openMenu }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Root>
      <MenuIcon onClick={() => setOpen(true)} />
      {open && <Menu onClose={() => setOpen(false)} />}
    </Root>
  )
}

const Root = styled.div``
