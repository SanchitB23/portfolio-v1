import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";
import IconLogo from "../../icons/Logo";
import {navLinks} from "../../../config/constants";
import {LayoutProps} from "../Interface";
import {loaderDelay} from "../../../config/utils";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const NavBar: React.FC<LayoutProps> = ({isHome}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100)
        return () => clearTimeout(timeout)
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
        <nav className="nav">
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
                                        to={`#${link}`}

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
        </nav>
    );
};

export default NavBar;
