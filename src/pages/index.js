import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import gifUniverse from '../../static/captivate-universe.gif'
import gifLightScenes from '../../static/captivate-light-scenes.gif'
import gifVisualScenes from '../../static/captivate-visual-scenes.gif'
import gifMixer from '../../static/captivate-mixer.gif'
import logo from '../../static/Thick_bg.png'

const GlobalStyle = createGlobalStyle`
  html {
    color: #080808;
    background-color: #f8f8f8;
  }

  body {
    font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
  }
`

// markup
export default function IndexPage() {
  let isAlternate = true
  function alternate() {
    isAlternate = !isAlternate
    return isAlternate
  }
  return (
    <Root>
      <GlobalStyle />
      <title>Captivate Lighting and Visual Synth</title>
      <FullTitle>
        <SubSection>
          <Row style={{ margin: '0 -2vw' }}>
            <Title style={{ margin: '2vw' }}>Captivate</Title>
            <TitleIcon src={logo} style={{ margin: '2vw' }} />
          </Row>
          <SubTitle>Lighting and Visual Synth</SubTitle>
        </SubSection>
      </FullTitle>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>Ready to Impress?</H2>
          <P>
            Captivate generates live Visuals and DMX Lighting that dynamically
            synchronizes to music.
          </P>
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>
            Beautiful. {/* Powerful. */}
            <br />
            Intuitive.
            <br />
            Fun.
          </H2>
        </SubSection>
        <SubSection>
          <P>
            Great lighting and visuals bring music to life
            <br />
            <br />
            With Captivate, creating a visual experience is every bit as fun and
            satifying as playing an instrument.
            <br />
            <br />
            This is how visual creation is supposed to feel
          </P>
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>Intuitive.</H2>
          <P>
            Let Captivate automate the show for you, or plug in a midi
            controller and "play" your visuals like an instrument.
          </P>
          <H2>Synchronized.</H2>
          <P>
            Ableton Link integration allows lights and visuals to synchonize
            automatically with other software
          </P>
          <H2>Fun.</H2>
          <P>With captivate, designing visuals is a blast</P>
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>Add Dimension To Your DMX Universe</H2>
          <P>
            Configure your dmx lighting setup in minutes.
            <br />
            <br />
            Tell Captivate which fixtures you have, and where they are located
            in space.
          </P>
          <img
            src={gifUniverse}
            style={{ width: '100%' }}
            alt={`Captivate's DMX Universe Configuration UI.
            From here you can tell Captivate what fixtures you have, what channel they are on, 
            and where they are located in space.`}
          />
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>Breathtaking Lighting</H2>
          <P>
            With captivate, hundreds of DMX channels boil down to a handful of
            intuitive parameters, including:
            <ul>
              <li>Hue</li>
              <li>Saturation</li>
              <li>Brightness</li>
              <li>X</li>
              <li>Y</li>
              <li>Strobe</li>
              <li>and more...</li>
            </ul>
            <div style={{ height: '0rem' }} />
            Take control of the parameters live, or automate them with
            captivate's familiar, synth-like modulation tools.
          </P>
          <img
            src={gifLightScenes}
            style={{ width: '100%' }}
            alt={`Captivate's Light Scene Editor UI.
            From here you can create lighting scenes by modulating captivate's intuitive parameters.
            `}
          />
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>Stunning Visuals</H2>
          <P>
            Curate a set of visualizations for each show.
            <br />
            <br />
            Captivate's customizable visualizations listen to the parameters
            from the active light scene so lighing and visuals are automatically
            synchronized.
          </P>
          <img
            src={gifVisualScenes}
            style={{ width: '100%' }}
            alt={`Captivate's  UI.
            `}
          />
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H2>The Tools you Need</H2>
          <P>View all 512 channels live. Take control when you need.</P>
          <img
            src={gifMixer}
            style={{ width: '100%' }}
            alt={`Captivate's  UI.
            `}
          />
        </SubSection>
      </Section>
      <Section alternate={alternate()} noFlex>
        <SubSection>
          <H2>And this is just the beginning</H2>
          <H4>Planned future features include:</H4>
          <ul>
            <li>More & improved visualizations</li>
            <li>Share scenes with other captivate users</li>
            <li>Do whatever</li>
          </ul>
        </SubSection>
      </Section>
      <Section alternate={alternate()} noFlex>
        <SubSection>
          <H2>Download</H2>
          <Row>
            <DLButton>Mac (intel)</DLButton>
            <DLButton>Mac (arm)</DLButton>
          </Row>
          <H3>Windows & Linux support coming soon</H3>
        </SubSection>
      </Section>
    </Root>
  )
}

const Root = styled.main``

const FullTitle = styled.div`
  color: #eee;
  padding: 5% 15%;
  margin: 0 -5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  min-height: 100vh;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-size: 10vw;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 5vw;
  }
`

const TitleIcon = styled.img`
  width: 14vw;
  @media (min-width: ${mediaMinWidth}) {
    width: 7vw;
  }
`

const SubTitle = styled.h2`
  font-size: 4vw;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 3vw;
  }
  color: #aaa;
`

const Section = styled.div`
  padding: 10% 15%;
  margin: 0 -5vw;
  color: ${(props) => props.alternate && '#eee'};
  background-color: ${(props) => props.alternate && '#222'};
  display: ${(props) => (props.noFlex ? '' : 'flex')};
  align-items: center;
  flex-wrap: wrap;
`

const SubSection = styled.div`
  flex: 1 0 0;
  min-width: 15rem;
  margin: 5vw;
`

const DLButton = styled.button`
  padding: 1.5rem 2rem;
  color: #fff;
  background-color: #55e;
  border: 2px solid #55e;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    border: 2px solid white;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
`
