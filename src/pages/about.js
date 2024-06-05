// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage
                alt="Dog puppy on garden"
                src="../images/dog-puppy-on-garden.jpg"
            />
        </Layout>
    )
}

export const Head = () => (
    <>
        <Seo title="About Me" />
        <meta name="description" content="Your description" />
    </>
)

// Step 3: Export your component
export default AboutPage