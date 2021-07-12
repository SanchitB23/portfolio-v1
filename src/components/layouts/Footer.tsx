import React from 'react';
import {LayoutProps} from "./Interface";

const Footer: React.FC<LayoutProps> = ({isHome}) => {
    return (
        <footer className={isHome ? "" : "not-home"}>
            <div> &copy; {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a></div>
        </footer>
    );
};

export default Footer;
