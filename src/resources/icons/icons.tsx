import React from 'react';
import PropTypes from 'prop-types';
import {
    IconGitHub,
    IconLinkedin,
    IconTwitter,
    IconStackoverflow
} from './index';

interface IconInterface {
    name: string
}

const Icon: React.FC<IconInterface> = ({name}) => {
    if (name === 'GitHub') {
        return <IconGitHub/>;
    } else if (name === 'Linkedin') {
        return <IconLinkedin/>;
    } else if (name === 'Twitter') {
        return <IconTwitter/>;
    } else if (name === 'StackOverflow') {
        return <IconStackoverflow/>
    }
    return <>{name}</>
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
