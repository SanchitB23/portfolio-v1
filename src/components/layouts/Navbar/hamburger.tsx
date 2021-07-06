import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";
import {navLinks} from "../../../config/constants";
import {Helmet} from "react-helmet";

const Hamburger: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(prevState => !prevState)
    // @ts-ignore
    const onResize = e => {
        if (e.currentTarget.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className={isMenuOpen ? "hamburger hamburger--open" : "hamburger"}>
            <Helmet>
                <body className={isMenuOpen ? 'no-scroll' : ''}/>
            </Helmet>
            <div className="hamburger__button" onClick={toggleMenu}>
                <span className="hamburger__icon">&nbsp;</span>
            </div>
            <div className="hamburger__background">&nbsp;</div>
            <div className="hamburger__nav">
                <ol className="hamburger__nav__list">
                    {navLinks && navLinks.map((link, index) => (
                        <li className="hamburger__nav__list__item" key={index}>
                            <Link
                                to={`/#${link}`}
                                className="hamburger__nav__list__item__link"
                                onClick={toggleMenu}
                            >{link}</Link>
                        </li>
                    ))}
                    {ResumeLink}
                </ol>
            </div>
        </div>
    );
};
const ResumeLink = (
    <a className="btn hamburger__nav__resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
    </a>
);
export default Hamburger;
