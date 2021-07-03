import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";
import IconLogo from "../../icons/Logo";
import {navLinks} from "../../../config/constants";
import {LayoutProps} from "../Interface";
import {loaderDelay} from "../../../config/utils";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import useScrollDirection from "../../../config/hooks/useScrollDirection";
import styled, {css} from "styled-components";
import Hamburger from "./hamburger";

const NavBar: React.FC<LayoutProps> = ({isHome}) => {
    const [isMounted, setIsMounted] = useState(false)
    const [scrolledToTop, setScrolledToTop] = useState(true);

    // @ts-ignore
    const scrollDirection: string = useScrollDirection('down');

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100)
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    const Logo = (
        <div tabIndex={-1}>
            {isHome ? (
                <a href="/" aria-label="home">
                    <IconLogo/>
                </a>
            ) : (
                <Link to="/" aria-label="home">
                    <IconLogo/>
                </Link>
            )}
        </div>
    );

    const ResumeLink = (
        <a className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
        </a>
    );

    return (
        <StyledHeader className="nav" scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <nav className="nav__navigation">
                <TransitionGroup component={null}>
                    {isMounted ? (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            <>{Logo}
                            </>
                        </CSSTransition>
                    ) : null}
                </TransitionGroup>
                <div className="nav__links">
                    <ol>
                        <TransitionGroup component={null}>
                            {isMounted && navLinks && navLinks.map((link, index) => (
                                <CSSTransition key={index} classNames={fadeDownClass} timeout={timeout}>
                                    <li className="nav__links__item" key={index}
                                        style={{transitionDelay: `${isHome ? index * 100 : 0}ms`}}>
                                        <Link
                                            to={`/#${link}`}
                                        >{link}</Link>
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ol>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                                <div style={{transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`}}>
                                    {ResumeLink}
                                </div>
                            </CSSTransition>

                        )}
                    </TransitionGroup>
                </div>
                <TransitionGroup component={null}>
                    {isMounted ? (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            <Hamburger/>
                        </CSSTransition>
                    ) : null}
                </TransitionGroup>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header<{ scrollDirection: string, scrolledToTop: boolean }>`
  @media (prefers-reduced-motion: no-preference) {
    ${props =>
            props.scrollDirection === 'up' &&
            !props.scrolledToTop &&
            css`
              height: var(--nav-scroll-height);
              transform: translateY(0px);
              background-color: rgba(10, 25, 47, 0.85);
              box-shadow: 0 10px 30px -10px var(--navy-shadow);
            `};

    ${props =>
            props.scrollDirection === 'down' &&
            !props.scrolledToTop &&
            css`
              height: var(--nav-scroll-height);
              transform: translateY(calc(var(--nav-scroll-height) * -1));
              box-shadow: 0 10px 30px -10px var(--navy-shadow);
            `};
  }
`

export default NavBar;
