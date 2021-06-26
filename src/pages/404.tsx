import React, {useEffect, useState} from 'react';
import Layout from "../components/layouts";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {navDelay} from "../config/utils";
import {Link} from "gatsby";
import styled from "styled-components";

const NotFoundPage: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const content = (
        <StyledMainContainer className="fillHeight">
            <StyledTitle>404</StyledTitle>
            <StyledSubtitle>Page Not Found</StyledSubtitle>
            <StyledHomeButton to="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
    );
    return (
        <Layout isHome={false} title="Page Not Found">
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition timeout={500} classNames="fadeup">
                        {content}
                    </CSSTransition>
                )}
            </TransitionGroup>
        </Layout>
    );
};

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--green-tint);
    outline: none;
  }

  &:after {
    display: none !important;
  }

  margin-top: 40px;
`;
export default NotFoundPage;
