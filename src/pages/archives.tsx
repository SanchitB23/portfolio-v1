import React, {useEffect, useRef} from 'react';
import Layout from "../components/layouts";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";
import ProjectLinkIcons from "../components/icons/ProjectLinkIcons";
import sr, {srConfig} from "../config/utils/scrollReveal";
import {OutboundLink} from "gatsby-plugin-google-gtag";

interface ArchiveProps {
    data: {
        allContentfulProjects: {
            nodes: [
                {
                    url: string[],
                    title: string,
                    projectCreatedOn: string
                    tags: [{
                        name: string
                    }]
                }
            ]
        }
    }
}

const Archives: React.FC<ArchiveProps> = ({data}) => {
    const {allContentfulProjects: {nodes: projects}} = data;
    const revealTitle = useRef(null);
    const revealTable = useRef(null);
    const revealProjects = useRef([]);

    useEffect(() => {
        // @ts-ignore
        sr.reveal(revealTitle.current, srConfig());
        // @ts-ignore
        sr.reveal(revealTable.current, srConfig(200, 0));
        // @ts-ignore
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
    }, []);

    return (
        <Layout isHome={false}>
            <Helmet title="Archive"/>
            <section className="section-archives">
                <header ref={revealTitle}>
                    <h1 className="big-heading">Archives</h1>
                    <span>A list of things I've worked on</span>
                </header>
                <div className="table-wrapper" ref={revealTable}>
                    <table className="table">
                        <thead className="table__header">
                        <tr>
                            <th>year</th>
                            <th>title</th>
                            <th className="table-wrapper__hide-on-mobile">built with</th>
                            <th>link</th>
                        </tr>
                        </thead>
                        <tbody className="table__body">
                        {projects.length && projects.map(({url, title, tags, projectCreatedOn}, index) => {
                            return (
                                // @ts-ignore
                                <tr key={index} ref={el => (revealProjects.current[index] = el)}>
                                    <td className="table__body__year">{projectCreatedOn}</td>
                                    <td className="table__body__title">{title}</td>
                                    <td className="table__body__tags table-wrapper__hide-on-mobile">
                                        {tags.map((item, i) => (
                                            <span key={i}>
                                                    {item.name}
                                                {''}
                                                {i !== tags.length - 1 &&
                                                <span className="separator">&middot;</span>
                                                }
                                                </span>
                                        ))}
                                    </td>
                                    <td className="table__body__urls">
                                        <div>
                                            {url.map((link, index) => {
                                                return (
                                                    <OutboundLink href={link}
                                                                  target="_blank"
                                                                  className={index == 2 ? "table__body__urls__npm" : ""}>
                                                        {ProjectLinkIcons[index]}
                                                    </OutboundLink>
                                                )
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulProjects(sort: {fields: projectCreatedOn, order: DESC}) {
            nodes {
                url
                title
                projectCreatedOn(formatString: "YYYY")
                tags {
                    name
                }
            }
        }
    }
`

export default Archives;
