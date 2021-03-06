import React from 'react';
import {socialMedia} from '../../../config/constants';
import Side from './index';
import {LayoutProps} from "../Interface";
import Icon from "../../icons/icons";
import {OutboundLink} from "gatsby-plugin-google-gtag";


const Social: React.FC<LayoutProps> = ({isHome}) => (
    <Side isHome={isHome || true} orientation="left">
        <ul className="side-social">
            {socialMedia &&
            socialMedia.map(({url, name}, i) => (
                <li key={i}>
                    <OutboundLink href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <Icon name={name}/>
                    </OutboundLink>
                </li>
            ))}
        </ul>
    </Side>
);


export default Social;
