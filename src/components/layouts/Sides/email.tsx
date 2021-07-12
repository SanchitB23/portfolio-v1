import React from 'react';
import {email} from '../../../config/constants';
import Side from './index';
import {LayoutProps} from "../Interface";
import {OutboundLink} from "gatsby-plugin-google-gtag";

const Email: React.FC<LayoutProps> = ({isHome}) => (
    <Side isHome={isHome || true} orientation="right">
        <div className="side-email">
            <OutboundLink href={`mailto:${email}`}>{email}</OutboundLink>
        </div>
    </Side>
);

export default Email;
