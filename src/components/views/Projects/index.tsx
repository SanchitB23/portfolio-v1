import React from 'react';
import FeaturedProjects from "./featured";
import AllProjects from "./allProjects";

const Index: React.FC = () => {
    return (
        <>
            <FeaturedProjects/>
            <AllProjects/>
        </>
    );
};

export default Index;
