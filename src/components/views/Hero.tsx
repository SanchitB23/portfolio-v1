import React, {useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {email} from "../../config/constants";
import {loaderDelay, navDelay} from "../../config/utils";
import {usePrefersReducedMotion} from "../../config/hooks";
import {OutboundLink} from "gatsby-plugin-google-gtag";


const one = <h1 className="hero__h1">Hi, my name is</h1>;
const two = <h2 className="big-heading">Sanchit Bhatnagar.</h2>;
const three = <h3 className="big-heading hero__h3">I build things for the web.</h3>;
const four = (
    <p>
        I'm a New Delhi-based software engineer who specializes in building (and occasionally designing)
        exceptional digital experiences. Currently, I'm a <b>Senior Software Developer</b> at{' '}
        <OutboundLink href="https://www.yum.com/wps/portal/yumbrands/Yumbrands" target="_blank" rel="noreferrer">
            Yum Brands
        </OutboundLink>{' '}
        focused on building Progressive end-to-end Apps on JavaScript Frameworks
    </p>
);
const five = (
    <OutboundLink href={`mailto:${email}`} className="btn hero__email-link">
        Get In Touch
    </OutboundLink>
);

const items = [one, two, three, four, five];


const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, [prefersReducedMotion]);

    return (
        <section className="hero">
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
                                <div style={{transitionDelay: `${i + 1}00ms`}} className="hero__content">{item}</div>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            )}
        </section>
    );
};

export default Hero;
