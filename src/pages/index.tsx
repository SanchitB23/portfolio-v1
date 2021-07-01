import * as React from "react"
import Layout from "../components/layouts";
import Hero from "../components/views/Hero";
import About from "../components/views/About";
import Jobs from "../components/views/Jobs";
import Projects from "../components/views/Projects";
import Contact from "../components/views/Contact";
import {PageProps} from "gatsby";

const LandingPage: React.FC<PageProps> = ({location}) => {
    return (
        <Layout location={location}>
            <Hero/>
        </Layout>
    )
}


export default LandingPage
