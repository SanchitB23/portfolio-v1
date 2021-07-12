import React, {Ref, useEffect, useRef, useState} from 'react';
import sr, {srConfig} from "../../../config/utils/scrollReveal";
import {graphql, useStaticQuery} from "gatsby";
import {ProjectsDataType} from "./projectInterface";
import Icon from "../../icons/icons";
import {iconNames} from "../../../config/constants";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ProjectLinkIcons from "../../icons/ProjectLinkIcons";

const AllProjects: React.FC = () => {
    const [showMore, setShowMore] = useState(false)

    const revealTitle = useRef(null);
    const revealArchiveLink = useRef(null);
    const revealProjects = useRef([]);

    const data: ProjectsDataType = useStaticQuery(allProjectsQuery)
    const GRID_LIMIT = 3;

    const {allContentfulProjects: {nodes}} = data;

    const firstSixProjects = nodes.slice(0, GRID_LIMIT)
    const projects = showMore ? nodes : firstSixProjects;


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sr.reveal(revealTitle.current, srConfig());
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sr?.reveal(revealArchiveLink.current, srConfig());
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        revealProjects.current.forEach((ref: Ref<HTMLElement>, i: number) => sr?.reveal(ref, srConfig(i * 100)));
    }, [])

    return (
        <section className="projects">
            <div className="projects__header">
                <h2 ref={revealTitle}>Other Noteworthy Projects</h2>
                <p><a href={"/archives"} ref={revealArchiveLink}>view archive</a></p>
            </div>
            <ul className="projects__grid">
                <TransitionGroup component={null}>
                    {
                        projects ? projects.map((project, index) => (
                            <CSSTransition
                                key={index}
                                classNames="fadeup"
                                timeout={index >= GRID_LIMIT ? (index - GRID_LIMIT) * 300 : 300}
                                exit={false}>
                                <li
                                    className="projects__grid__item"
                                    ref={ref => {
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        return (revealProjects.current[index] = ref)
                                    }}
                                    style={{
                                        transitionDelay: `${index >= GRID_LIMIT ? (index - GRID_LIMIT) * 100 : 0}ms`,
                                    }}>
                                    <div>
                                        <header>
                                            <Icon name={iconNames.Folder}/>
                                            <ul>
                                                {project.url ? project.url.map((url, index) => (
                                                    <li key={index}>
                                                        <a href={url} target="_blank">
                                                            {ProjectLinkIcons[index]}
                                                        </a>
                                                    </li>
                                                )) : null}
                                            </ul>
                                        </header>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                    <ul className="project__tags">
                                        {project.tags ? project.tags.map(({name}, index) => (
                                            <li key={index}>{name}</li>
                                        )) : null}
                                    </ul>
                                </li>
                            </CSSTransition>
                        )) : null
                    }
                </TransitionGroup>
            </ul>
            <button className="btn" onClick={() => setShowMore(!showMore)}>
                Show {showMore ? 'Less' : 'More'}
            </button>
        </section>
    );
};

const allProjectsQuery = graphql`
    {
        allContentfulProjects(filter: {featured: {eq: false}}, limit: 6) {
            nodes {
                title
                url
                description
                tags {
                    name
                }
            }
        }
    }
`

export default AllProjects;
