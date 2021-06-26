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


/*const NavBarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 4rem;
  backdrop-filter: blur(10px);
  z-index: 100;

  svg {
    height: 4.2rem;
    width: 4.2rem;
    fill: var(--orange);
  }

  .nav__links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ol {
      a:visited,
      a:link {
        margin: 0 2rem;
        padding: 5px 0;
        color: var(--lightest-slate);
        text-decoration: none;
        border-bottom: 2px solid transparent;
        -webkit-transition: border-bottom 0.2s;
        transition: color 0.2s;
        font-size: 1.3rem;
        font-family: var(--font-mono);
      }

      a:active,
      a:hover {
        color: var(--orange);
      }
    }
  }

`*/
export default NavBar;
