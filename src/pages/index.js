import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import gifUniverse from '../../static/captivate-universe.gif'
import gifLightScenes from '../../static/captivate-light-scenes.gif'
import gifVisualScenes from '../../static/captivate-visual-scenes.gif'
import gifMixer from '../../static/captivate-mixer.gif'
import Header from '../components/Header'
import me from '../../static/me_serious.jpg'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Title from '../components/Title'

const GlobalStyle = createGlobalStyle`
  html {
    color: #080808;
    background-color: #000;
  }

  body {
    font-family: "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    background-color: #f8f8f8;
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
      <Header />
      <Title />
      <Section alternate={alternate()} flex>
        <SubSection>
          {/* <H3>Ready to Impress?</H3> */}
          <H3>Create A Lasting Impression</H3>
          <P>Great lighting and visuals bring music to life</P>
          <P>
            With Captivate, creating a visual experience is every bit as fun and
            satifying as playing an instrument.
          </P>
          <P> This is how visual creation is supposed to feel</P>
        </SubSection>
      </Section>
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>
            Beautiful. {/* Powerful. */}
            <br />
            Intuitive.
            <br />
            Fun.
          </H3>
        </SubSection>
      </Section>
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>Intuitive.</H3>
          <P>
            Let Captivate automate the show for you, or plug in a midi
            controller and "play" your visuals like an instrument.
          </P>
          <H3>Synchronized.</H3>
          <P>
            Ableton Link integration allows lights and visuals to synchonize
            automatically with other software
          </P>
          <H3>Fun.</H3>
          <P>With captivate, designing visuals is a blast</P>
        </SubSection>
      </Section>
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>Add Dimension To Your DMX Universe</H3>
          <P>Configure your dmx universe in minutes.</P>
          <P>
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
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>Breathtaking Lighting</H3>
          <P>
            With captivate, hundreds of DMX channels boil down to a handful of
            intuitive parameters, including:
          </P>
          <ul>
            <li>Hue</li>
            <li>Saturation</li>
            <li>Brightness</li>
            <li>X</li>
            <li>Y</li>
            <li>Strobe</li>
            <li>and more...</li>
          </ul>
          <P>
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
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>Stunning Visuals</H3>
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
            alt={`Captivate's Visualization Scene Creator UI.
            `}
          />
        </SubSection>
      </Section>
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>The Tools you Need</H3>
          <P>View all 512 channels live. Take control when you need.</P>
          <img
            src={gifMixer}
            style={{ width: '100%' }}
            alt={`Captivate's DMX Mixer UI.
            `}
          />
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H3>And this is just the beginning</H3>
          <P>
            We have lots of ideas to make Captivate more powerful and flexible
          </P>
          <H4>Features include:</H4>
          <ul>
            <li>More & improved visualizations</li>
            <li>Share scenes with other captivate users</li>
            <li>More parameters & custom parameters</li>
            <li>More & improved modulators</li>
            <li>Lighting groups</li>
            <li>Visual layers</li>
          </ul>
        </SubSection>
      </Section>
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>How It Started</H3>
          <P>
            I've been a musician all my life. Music is fun and dynamic. But
            lighting software has always been static, clunky, and unintuitive.
            This forces artists to choose between a pre-defined light show that
            locks you into a set, or a light show that doesn't fit the music.
            <br />
            <br />
            Captivate solves these issues. Everything is in sync, I can take as
            much live control as I'd like, and adding fixtures to my DMX
            universe is a piece of cake.
            <br />
            <br />
            The end result is an app that's incredibly fun to use. And the
            results truly are captivating.
          </P>
        </SubSection>
        <SubSection style={{ flex: '0.5 0 0' }}>
          <img
            src={me}
            style={{ width: '15rem', height: '20rem', objectFit: 'cover' }}
            alt="Spenser Saling, Captivate Creator"
          />
          <P>Spenser Saling, Creator</P>
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <SubSection>
          <H3>Download</H3>
          <Row>
            <Button>Mac (intel)</Button>
            <Button>Mac (arm)</Button>
          </Row>
          <H5>Windows & Linux support coming soon</H5>
        </SubSection>
      </Section>
      <Footer />
    </Root>
  )
}

const Root = styled.main``

const SubSection = styled.div`
  flex: 1 0 0;
  min-width: 15rem;
  margin: 1rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`
