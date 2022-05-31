import * as React from 'react'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import gifUniverse from '../../static/captivate-universe.gif'
import gifLightScenes from '../../static/captivate-light-scenes.gif'
import gifVisualScenes from '../../static/captivate-visual-scenes.gif'
import gifMixer from '../../static/captivate-mixer.gif'
import me from '../../static/me_serious.png'
import Section from '../components/Section'
import Title from '../components/Title'
import Page from '../components/Page'
import styled from 'styled-components'
import JustTheBeginning from '../index/JustTheBeginning'
import BISF from '../index/BISF'
import Download from '../index/Download'

// markup
export default function IndexPage() {
  let isAlternate = true
  function alternate() {
    isAlternate = !isAlternate
    return isAlternate
  }
  return (
    <Page
      pageName="Home"
      expandedHeader
      pageDescription={`An app for generating live visuals and lighting that synchronize to music.`}
    >
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
            {/* <br /> */}
            Intuitive. {/* <br /> */}
            Fun.
          </H3>
        </SubSection>
      </Section>
      <Section alterate={alternate()}>
        <SubSection>
          <H3>Synchronized</H3>
          <P>
            Ableton Link Integration Allows Captivate to Sync bpm with any other
            Link-Enabled Product
          </P>
        </SubSection>
      </Section>
      {/* <Section alternate={alternate()} flex>
        <SubSection>
          <BISF />
        </SubSection>
      </Section> */}
      <Section alternate={alternate()} flex>
        <SubSection>
          <H3>Add Dimension To Your DMX Universe</H3>
          <P>Configure your dmx universe in minutes.</P>
          <P>
            Tell Captivate which fixtures you have, and where they are located
            in space.
          </P>
          <P>Add fixtures seamlessly, without the need to update scenes.</P>
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
            intuitive parameters
          </P>
          {/* <ul>
            <li>Hue</li>
            <li>Saturation</li>
            <li>Brightness</li>
            <li>X</li>
            <li>Y</li>
            <li>Strobe</li>
            <li>and more...</li>
          </ul> */}
          <P>
            Take control of these parameters live, or automate them with
            captivate's familiar, synth-like modulation tools.
          </P>
          {/* <P>This approach is what makes captivate so simple and fun.</P> */}
          <P>Light groups allow you to add complexity as needed</P>
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
            Combine visualizers and effects in any way to perfect your visual
            experience
          </P>
          <P>
            Visualizers and effects listen to the parameters from the active
            light scene so lighing and visuals are automatically synchronized.
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
          <H3>Streamlined Complexity</H3>
          <P>
            With Captivate, you'll forget there are 512 DMX channels running
            behind then scenes
          </P>
          {/* <P>But you can still access them when you need to</P> */}
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
          <JustTheBeginning />
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
          <H3>Recommended Equipment</H3>
          <H5>For DMX Lighting</H5>
          <P>
            Captivate Requires a USB Pro DMX device such as the{' '}
            <LightLink href="https://www.enttec.com/product/lighting-communication-protocols/dmx512/dmx-usb-interface/">
              ENNTEC USB Pro
            </LightLink>{' '}
            or the{' '}
            <LightLink href="https://dmxking.com/usbdmx/ultradmxmicro">
              DMX King Ultra DMX Micro
            </LightLink>
          </P>
          <H5>For Visuals</H5>
          <P>
            Captivate's Visualizer Engine runs best on a computer with a
            dedicated GPU.
          </P>
          <P>A base M1 Macbook Air works great.</P>
        </SubSection>
      </Section>
      <Section alternate={alternate()}>
        <a id="download" />
        <SubSection>
          <Download />
        </SubSection>
      </Section>
    </Page>
  )
}

const SubSection = styled.div`
  flex: 1 0 0;
  min-width: 15rem;
  margin: 1rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const LightLink = styled.a`
  color: #aaf;
`
