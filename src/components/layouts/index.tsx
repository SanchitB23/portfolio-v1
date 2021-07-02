import React, {useState} from 'react';
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
    /*
     *if (isHome && isLoading) {
     *  return <Loader finishLoading={() => {
     *      return setIsLoading(false)
     *  }}/>
     *
     *}
     */

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
                    <main>{children}</main>
                    <Footer isHome={isHome}/>
                </>
            )}
        </React.Fragment>
    );
};

export default Layout;
