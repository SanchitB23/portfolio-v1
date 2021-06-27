import React from 'react';
import SEO from "../helpers/SEO";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Social from "./Sides/social";
import Email from "./Sides/email";
import {LayoutProps} from "./Interface";


const Layout: React.FC<LayoutProps> = ({children, isHome, title}) => {
    // const isHome = location.pathname === '/'
    /*if (isHome && isLoading) {
        return <Loader finishLoading={() => {
            return setIsLoading(false)
        }}/>

    }*/

    return (
        <React.Fragment>
            <SEO title={title}/>
            <NavBar isHome={isHome}/>
            <Social isHome={isHome}/>
            <Email isHome={isHome}/>
            <main>{children}</main>
            <Footer isHome={isHome}/>
        </React.Fragment>
    );
};

export default Layout;
