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
        <H2>Terms And Conditions</H2>
        <P>1. Have Fun! This is non-negotiable</P>
        <P>
          2. Captivate is beta software and is undergoing active development.
          Use at your own risk.
        </P>
        <P>
          2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </P>
      </Section>
    </Page>
  )
}
