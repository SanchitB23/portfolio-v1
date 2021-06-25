import React from 'react';
import {Link} from "gatsby";
import IconLogo from "../../icons/Logo";
import {navLinks} from "../../../config/constants";
import {LayoutProps} from "../Interface";

const renderNavLinks = () => {
    return navLinks.map((link, index) => {
        return <Link to={`#${link}`}
                     key={index} className="nav__links__item">{link}</Link>
    })
}

const NavBar: React.FC<LayoutProps> = ({isHome}) => {
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
    return (
        <nav className="nav">
            {Logo}
            <div className="nav__links">
                <ol>
                    {renderNavLinks()}
                </ol>
                <a className="btn">Resume</a>
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
