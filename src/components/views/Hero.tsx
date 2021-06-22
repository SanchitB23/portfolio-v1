import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {email} from "../../config/constants";
import {loaderDelay, navDelay} from "../../config/utils";
import {usePrefersReducedMotion} from "../../config/hooks";


const one = <h1>Hi, my name is</h1>;
const two = <h2 className="big-heading">Sanchit Bhatnagar.</h2>;
const three = <h3 className="big-heading">I build things for the web.</h3>;
const four = (
    <p>
        I'm a New Delhi-based software engineer who specializes in building (and occasionally designing)
        exceptional digital experiences. Currently, I'm an engineer at{' '}
        <a href="/" target="_blank" rel="noreferrer">
            Tata Consultancy Services
        </a>{' '}
        focused on building Progressive Web Apps on ReactJS
    </p>
);
const five = (
    <a href={`mailto:${email}`} className="email-link">
        Get In Touch
    </a>
);

const items = [one, two, three, four, five];


const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Wrapper>
            {prefersReducedMotion ? (
                <>
                    {items.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted &&
                    items.map((item, i) => (
                        <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                            <div style={{transitionDelay: `${i + 1}00ms`}}>{item}</div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--orange);

      &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        position: relative;
        bottom: 0.5rem;
        background-color: var(--orange);
        transition: var(--transition);
        opacity: 0.5;
      }

      :hover:after {
        width: 100%;
        left: 0;
        background: var(--orange);
      }

      &[target='_blank'] {
        cursor: help;
      }
    }
  }

  .email-link {
    position: relative;
    top: 5rem;
    font-size: 1.5rem;
    font-family: var(--font-mono);
    border: 2px solid var(--orange);
    border-radius: 4px;
    text-align: center;
    padding: 2rem 3rem;
    text-decoration: none;
    color: var(--orange);
  }
`;

export default Hero;
