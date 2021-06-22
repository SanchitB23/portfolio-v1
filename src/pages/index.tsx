import * as React from "react"
import Layout from "../components/layouts";
import Hero from "../components/views/Hero";
import styled from "styled-components";

// markup
const LandingPage = () => {
  return (
      <Layout>
        <MainWrapper>
          <Hero/>
        </MainWrapper>
      </Layout>
  )
}

const MainWrapper = styled.main`
  padding: 0 15rem;
`

export default LandingPage
