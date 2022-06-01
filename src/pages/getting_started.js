import * as React from 'react'
import Page from '../components/Page'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import Section from '../components/Section'

export default function GettingStartedPage() {
  return (
    <Page
      pageName="Getting Started"
      pageDescription={`Tutorials for Captivate Lighting and Visual Synth`}
    >
      <Section>
        <H2>Getting Started</H2>
        <P>
          If you haven't already, be sure to{' '}
          <a href="/#download">download captivate</a>
        </P>
      </Section>
    </Page>
  )
}
