import React from 'react';
import FeaturedProjects from "./featured";
import AllProjects from "./allProjects";
import Icon from "../../icons/icons";
import {iconNames} from "../../../config/constants";

const Index: React.FC = () => {
    return (
        <>
            <FeaturedProjects ProjectLinkIcons={ProjectLinkIcons}/>
            <AllProjects ProjectLinkIcons={ProjectLinkIcons}/>
        </>
    );
};
const ProjectLinkIcons = [
    <Icon name={iconNames.GitHub}/>,
    <Icon name={iconNames.External}/>,
    <Icon name={iconNames.NPM}/>
]
export default Index;
