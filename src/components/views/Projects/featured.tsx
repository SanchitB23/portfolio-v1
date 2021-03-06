import React, {useEffect, useRef} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {navLinks} from "../../../config/constants";
import {ProjectsDataType} from "./projectInterface";
import sr, {srConfig} from "../../../config/utils/scrollReveal";
import ProjectLinkIcons from "../../icons/ProjectLinkIcons";
import {OutboundLink} from "gatsby-plugin-google-gtag";

const FeaturedProjects: React.FC = () => {
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
                                        <OutboundLink href={url[1] || url[0]} target="_blank">{title}</OutboundLink>
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
                                                    <OutboundLink href={link} target="_blank">
                                                        {ProjectLinkIcons[index]}
                                                    </OutboundLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="featured__list__item__image">
                                    <OutboundLink href={url[1] || url[0]} className="featured__list__item__image__link"
                                                  target="_blank">
                                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                        {/*@ts-ignore*/}
                                        <GatsbyImage image={cover} alt={title}
                                                     className="featured__list__item__image__link__img"/>
                                    </OutboundLink>
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
