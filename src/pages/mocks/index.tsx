import React from 'react';
import styled from "styled-components";
import Layout from "../../components/layouts";


const Test: React.FC = (props) => {
    console.log(props)
    return (
        <Layout isHome={false}>
            <StyledHeader className="test__h1">Hello</StyledHeader>
        </Layout>
    );
};
const StyledHeader = styled.h1`
  color: orangered;
`
export default Test;
