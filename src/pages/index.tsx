import * as React from "react"
import Layout from "../components/layouts";
import Hero from "../components/views/Hero";

// markup
const LandingPage = () => {
    return (
        <Layout isHome title="Home">
            <Hero/>
        </Layout>
    )
}


export default LandingPage
