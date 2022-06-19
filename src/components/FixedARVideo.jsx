import React from 'react'
import styled from 'styled-components'

export function FixedARVideo({ src, ar }) {
  return (
    <VideoWrapper style={{ paddingBottom: `${(1 / ar) * 100}%` }}>
      <Iframe
        title="YouTube video player"
        src={src}
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </VideoWrapper>
  )
}

const VideoWrapper = styled.div`
  position: relative;
  height: 0;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
