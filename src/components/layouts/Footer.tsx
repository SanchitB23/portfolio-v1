import React from 'react';
import {LayoutProps} from "./Interface";
import {OutboundLink} from "gatsby-plugin-google-gtag";

const Footer: React.FC<LayoutProps> = ({isHome}) => {
    return (
        <footer className={isHome ? "" : "not-home"}>
            <div> &copy; {new Date().getFullYear()}, Built with
                {` `}
                <OutboundLink href="https://www.gatsbyjs.org" target="_blank">Gatsby</OutboundLink></div>
        </footer>
    );
};

export default Footer;
