import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {navLinks} from "../../config/constants";
import {GatsbyImage, getImage, ImageDataLike} from "gatsby-plugin-image";
import Icon from "../../components/icons/icons";


interface ProjectsDataType {
    allContentfulProjects: {
        nodes:
            [{
                description: string
                image: ImageDataLike
                tags: [{
                    name: string
                }]
                title: string
                url: string[]
            }]

    }
}

const Projects: React.FC = () => {
    const data: ProjectsDataType = useStaticQuery(projectsQuery)
    const {allContentfulProjects: {nodes: projects}} = data;
    return (
        <section className="projects" id={navLinks[2]}>
            <h1 className="section-heading">Some Things I've Built</h1>
            <ul className="projects__list">
                {
                    projects && projects.map((project, index) => {
                        const {tags, description, url, title, image} = project;
                        const cover = getImage(image)
                        return (
                            <li className="projects__list__item" key={index}>
                                <div className="projects__list__item__content">
                                    <p className="projects__list__item__content__overline">Featured Project</p>
                                    <h3 className="projects__list__item__content__title">
                                        <a href={url[1] || url[0]}>{title}</a>
                                    </h3>
                                    <div className="projects__list__item__content__description">
                                        {description}
                                    </div>
                                    {tags.length && (
                                        <ul className="projects__list__item__content__tag-list">
                                            {tags.map(({name}, index) => (
                                                <li key={index}>
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {url.length && (
                                        <ul className="projects__list__item__content__links">
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
                                <div className="projects__list__item__image">
                                    <a href={url[1] || url[0]}>
                                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                        {/*@ts-ignore*/}
                                        <GatsbyImage image={cover} alt={title}
                                                     className="projects__list__item__image__img"/>
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

const ProjectLinkIcons = [
    <Icon name="GitHub"/>,
    <Icon name="External"/>,
    <Icon name="NPM"/>
]

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

export default Projects;
