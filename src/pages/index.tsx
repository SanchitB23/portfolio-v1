import * as React from "react"
import Layout from "../components/layouts";
import Hero from "../components/views/Hero";
import About from "../components/views/About";
import Jobs from "../components/views/Jobs";
import Projects from "../components/views/Projects";
import Contact from "../components/views/Contact";

// markup
const LandingPage = () => {
    return (
        <Layout isHome title="Home">
            <Hero/>
            <About/>
            <Jobs/>
            <Projects/>
            <Contact/>
        </Layout>
    )
}


export default LandingPage
