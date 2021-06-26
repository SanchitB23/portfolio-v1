import React from 'react';
import PropTypes from 'prop-types';
import {IconGitHub, IconLinkedin, IconStackoverflow, IconTwitter} from './index';
import IconNpm from "./npm";
import IconExternal from "./external";
import IconFolder from "./folder";
import {iconNames} from "../../config/constants";

interface IconInterface {
    name: string
}

const Icon: React.FC<IconInterface> = ({name}) => {
    switch (name) {
        case iconNames.GitHub:
            return <IconGitHub/>;
        case iconNames.Linkedin:
            return <IconLinkedin/>;
        case iconNames.Twitter:
            return <IconTwitter/>;
        case iconNames.StackOverflow:
            return <IconStackoverflow/>
        case iconNames.NPM:
            return <IconNpm/>
        case iconNames.External:
            return <IconExternal/>
        case iconNames.Folder:
            return <IconFolder/>
        default:
            return <>{name}</>
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
