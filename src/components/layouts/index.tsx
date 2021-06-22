import React from 'react';
import SEO from "../helpers/SEO";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Social from "./Sides/social";
import Email from "./Sides/email";

const Layout: React.FC = ({children}) => {
    // const isHome = location.pathname === '/'
    /*if (isHome && isLoading) {
        return <Loader finishLoading={() => {
            return setIsLoading(false)
        }}/>

    }*/
    return (
        <React.Fragment>
            <SEO/>
            <NavBar isHome={true}/>
            <Social isHome={true}/>
            <Email isHome={true}/>
            {children}
            <Footer/>
        </React.Fragment>
    );
};


export default Layout;
