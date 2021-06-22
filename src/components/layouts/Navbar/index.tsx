import React from 'react';
import {Link} from "gatsby";
import IconLogo from "../../../resources/icons/Logo";
import styled from "styled-components";
import {navLinks} from "../../../config/constants";
import {LayoutProps} from "../Interface";





const renderNavLinks = () => {
    return navLinks.map((link, index) => {
        return <Link to={`#${link}`}><span>{index + 1}.</span> {link.charAt(0).toUpperCase() + link.slice(1)}</Link>
    })
}

const NavBar: React.FC<LayoutProps> = ({isHome}) => {
    const Logo = (
        <div className="logo" tabIndex={-1}>
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
    return (
        <NavBarStyle>
            {Logo}
            <div className="links">
                <ol>
                    {renderNavLinks()}
                </ol>
                <div className="resume">
                    <a href="/">Resume</a>
                </div>
            </div>
        </NavBarStyle>
    );
};
const NavBarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  height: 10rem;


  svg {
    height: 5rem;
    width: 5rem;
    fill: var(--orange);
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ol {
      a:visited,
      a:link {
        margin: 0 2rem;
        padding: 5px 0;
        color: #fff;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        -webkit-transition: border-bottom 0.2s;
        transition: color 0.2s;
        font-size: 1.3rem;
        font-family: var(--font-mono);
      }

      span {
        color: var(--orange);
      }

      a:active,
      a:hover {
        color: var(--orange);
      }
    }
  }

  .resume {
    margin: 0 2rem;
    font-size: 1.3rem;
    font-family: var(--font-mono);
    border: 2px solid var(--orange);
    border-radius: 4px;
    text-align: center;
    padding: 1rem 1.5rem;

    a:visited,
    a:link {
      text-decoration: none;
      color: var(--orange);
    }
  }
`
export default NavBar;
