import React, {useEffect, useRef} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {navLinks} from "../../../config/constants";
import {ProjectComponentProps, ProjectsDataType} from "./projectInterface";
import sr, {srConfig} from "../../../config/utils/scrollReveal";

const FeaturedProjects: React.FC<ProjectComponentProps> = ({ProjectLinkIcons}) => {
    const data: ProjectsDataType = useStaticQuery(projectsQuery)
    const {allContentfulProjects: {nodes: projects}} = data;
    const revealSection = useRef<HTMLElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sr?.reveal(revealSection.current, srConfig())
    }, [])
    return (
        <section className="featured" id={navLinks[2]} ref={revealSection}>
            <h1 className="section-heading">Some Things I've Built</h1>
            <ul className="featured__list">
                {
                    projects && projects.map((project, index) => {
                        const {tags, description, url, title, image} = project;
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        const cover = getImage(image)
                        return (
                            <li className="featured__list__item" key={index}>
                                <div className="featured__list__item__content">
                                    <p className="featured__list__item__content__overline">Featured Project</p>
                                    <h3 className="project__heading">
                                        <a href={url[1] || url[0]}>{title}</a>
                                    </h3>
                                    <div className="project__description">
                                        {description}
                                    </div>
                                    {tags.length && (
                                        <ul className="project__tags featured__list__item__content__tag-list">
                                            {tags.map(({name}, index) => (
                                                <li key={index}>
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {url.length && (
                                        <ul className="project__links featured__list__item__content__links">
                                            {url.map((link, index) => (
                                                <li key={index}>
                                                    <a href={link}>
                                                        {ProjectLinkIcons[index]}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="featured__list__item__image">
                                    <a href={url[1] || url[0]} className="featured__list__item__image__link">
                                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                        {/*@ts-ignore*/}
                                        <GatsbyImage image={cover} alt={title}
                                                     className="featured__list__item__image__link__img"/>
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};


const projectsQuery = graphql`
    {
        allContentfulProjects(filter: {featured: {eq: true}}) {
            totalCount
            nodes {
                description
                image {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
                tags {
                    name
                }
                title
                url
            }
        }
    }
`

export default FeaturedProjects;
