import React from 'react';
import PropTypes from 'prop-types';
import {IconGitHub, IconLinkedin, IconStackoverflow, IconTwitter} from './index';
import IconNpm from "./npm";
import IconExternal from "./external";

interface IconInterface {
    name: string
}

const Icon: React.FC<IconInterface> = ({name}) => {
    switch (name) {
        case 'GitHub':
            return <IconGitHub/>;
        case 'Linkedin':
            return <IconLinkedin/>;
        case 'Twitter':
            return <IconTwitter/>;
        case 'StackOverflow':
            return <IconStackoverflow/>
        case 'NPM':
            return <IconNpm/>
        case 'External':
            return <IconExternal/>
        default:
            return <>{name}</>
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
