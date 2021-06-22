import React from 'react';
import styled from "styled-components";
import Logo from "../../resources/icons/Logo";


const Test: React.FC = (props) => {
    console.log(props)
    return (
        <Wrapper>
            <Logo/>
            <h1>HEllo</h1>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  svg {
    fill: orangered;
  }
`
export default Test;
