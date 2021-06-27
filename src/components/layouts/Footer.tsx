import React from 'react';
import {LayoutProps} from "./Interface";

const Footer: React.FC<LayoutProps> = ({isHome}) => {
    return (
        <footer className={isHome ? "" : "not-home"}>
            <div>Theme by Brittany Chiang</div>
        </footer>
    );
};

export default Footer;
