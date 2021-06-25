import React from 'react';
import {email} from '../../../config/constants';
import Side from './index';
import {LayoutProps} from "../Interface";

const Email: React.FC<LayoutProps> = ({isHome}) => (
    <Side isHome={isHome} orientation="right">
        <div className="side-email">
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    </Side>
);

export default Email;
