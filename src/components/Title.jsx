import * as React from 'react'
import styled from 'styled-components'
import useBounds from '../hooks/useBounds'
import demo from '../../static/captivate_demo_1.mp4'
import { opacity } from './Header'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

export default function Title() {
  const [rootRef, bounds] = useBounds()
  const videoRef = React.useRef(null)
  const [muted, setMuted] = React.useState(true)

  let updateMuted = () => {}
  if (videoRef.current) {
    updateMuted = () => {
      if (videoRef) {
        videoRef.current.muted = !muted
        setMuted(!muted)
      }
    }
  }

  return (
    <Root ref={rootRef}>
      {/* <iframe
        width="100%"
        height={`${bounds?.height || 0}`}
        src="https://www.youtube.com/embed/adxGcJfbfVc?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      {/* <iframe
        width="100%"
        height={`${bounds?.height || 0}`}
        src="https://www.youtube.com/embed/Nf50Aefpaag?controls=0&amp;start=135&mute=1&autoplay=1&modestbranding=1&loop=1&showinfo=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <video
        width="100%"
        height={`${bounds?.height || 0}`}
        style={{ objectFit: 'cover' }}
        autoPlay
        muted
        loop
        controlsList=""
        ref={videoRef}
      >
        <source src={demo} type="video/mp4" />
      </video>

      <TitleTextContainer>
        <TitleText>
          Live Visuals and DMX Lighting that dynamically synchronizes to music.
        </TitleText>
        <TitleText>Free - Open Source</TitleText>
      </TitleTextContainer>
      <MuteWrapper>
        <MuteButton onClick={updateMuted}>
          {muted ? (
            <VolumeUpIcon color="inherit" fontSize="inherit" />
          ) : (
            <VolumeOffIcon color="inherit" fontSize="inherit" />
          )}
        </MuteButton>
      </MuteWrapper>
    </Root>
  )
}

const Root = styled.div`
  color: #eee;
  background-color: #222;
  height: 100vh;
  position: relative;
`

const TitleText = styled.h2`
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
