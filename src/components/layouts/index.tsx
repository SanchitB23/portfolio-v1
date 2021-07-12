import React, {useEffect, useState} from 'react';
import SEO from "../helpers/SEO";
import NavBar from "./Navbar";
import Social from "./Sides/social";
import Email from "./Sides/email";
import {LayoutProps} from "./Interface";
import Loader from "../features/Loader";
import Footer from "./Footer";


const Layout: React.FC<LayoutProps> = ({children, title, location}) => {
    const isHome = location?.pathname === '/'
    const [isLoading, setIsLoading] = useState(true)

    // Sets rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
            allLinks.forEach(link => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            });
        }
    };

    useEffect(() => {
        if (isLoading) return
        if (location?.hash) {
            const id = location.hash.substring(1)
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) {
                    el.scrollIntoView()
                    el.focus()
                }
            }, 0)
        }
        handleExternalLinks()
    }, [isLoading, location?.hash])

    return (
        <React.Fragment>
            <SEO title={title}/>
            {isLoading && isHome ? (
                <Loader finishLoading={() => setIsLoading(false)}/>
            ) : (
                <>
                    <NavBar isHome={isHome}/>
                    <Social isHome={isHome}/>
                    <Email isHome={isHome}/>
                    <main className={isHome ? "main" : ""}>{children}</main>
                    <Footer isHome={isHome}/>
                </>
            )}
        </React.Fragment>
    );
};

export default Layout;
