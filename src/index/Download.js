import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import DownloadButton from '../components/DownloadButton'

const CAPTIVATE_VERSION = '0.9.3'

export default function Download() {
  const [accepted, setAccepted] = useState(false)

  return (
    <>
      <H3>Download</H3>
      <P>
        Captivate is beta software under active development. Use at your own
        risk
      </P>
      <Row>
        <Checkbox
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <P>
          I accept the <TermsAndConditions />
        </P>
      </Row>
      <Row style={{ margin: '0 -1rem' }}>
        <DownloadButton
          enabled={accepted}
          href={`https://github.com/spensbot/captivate/releases/download/0.9.3/Captivate-${CAPTIVATE_VERSION}.dmg`}
          download={`Captivate-${CAPTIVATE_VERSION}.dmg`}
        >
          Mac (intel)
        </DownloadButton>
        <DownloadButton
          enabled={accepted}
          href={`https://github.com/spensbot/captivate/releases/download/0.9.3/Captivate-${CAPTIVATE_VERSION}-arm64.dmg`}
          download={`Captivate-${CAPTIVATE_VERSION}-arm64.dmg`}
        >
          Mac (M1)
        </DownloadButton>
      </Row>
      <P>Windows & Linux support coming soon</P>
    </>
  )
}

function TermsAndConditions() {
  return <a href="/terms_and_conditions">Terms & Conditions</a>
}

const Row = styled.div`
  display: flex;
  align-items: center;
`
