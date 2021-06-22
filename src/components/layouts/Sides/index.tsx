import React, {useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import styled from 'styled-components';
import {loaderDelay} from '../../../config/utils';
import {usePrefersReducedMotion} from '../../../config/hooks';

interface SideProps {
    children: React.ReactNode,
    isHome: boolean,
    orientation: 'left' | 'right',
}

interface StyledElement {
    orientation: 'left' | 'right'
}

const StyledSideElement = styled.div<StyledElement>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side: React.FC<SideProps> = ({children, isHome, orientation}) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!isHome || prefersReducedMotion) {
            return;
        }
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledSideElement orientation={orientation}>
            {prefersReducedMotion ? (
                <>{children}</>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
                            {children}
                        </CSSTransition>
                    )}
                </TransitionGroup>
            )}
        </StyledSideElement>
    );
};

export default Side;
