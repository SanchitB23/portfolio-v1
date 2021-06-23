import React from 'react';
import SEO from "../helpers/SEO";
import NavBar from "./Navbar";
import Social from "./Sides/social";
import Email from "./Sides/email";
import {LayoutProps} from "./Interface";


const Layout: React.FC<LayoutProps> = ({children, title}) => {
    // const isHome = location.pathname === '/'
    /*if (isHome && isLoading) {
        return <Loader finishLoading={() => {
            return setIsLoading(false)
        }}/>

    }*/

    return (
        <React.Fragment>
            <SEO title={title}/>
            <NavBar isHome={true}/>
            <Social isHome={true}/>
            <Email isHome={true}/>
            <main>{children}</main>
            {/*<Footer/>*/}
        </React.Fragment>
    );
};

export default Layout;
