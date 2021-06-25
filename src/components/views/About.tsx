import React, {useEffect, useRef} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";
import sr, {srConfig} from "../../config/utils/scrollReveal";
import {navLinks} from "../../config/constants";

const About = () => {
    const {allContentfulProjectTags: {nodes: data}} = useStaticQuery(tagsQuery)
    const revealSection = useRef(null);

    useEffect(() => {
        // @ts-ignore
        sr?.reveal(revealSection.current, srConfig())
    })
    return (
        <section id={navLinks[0]} ref={revealSection} className="about">
            <h1 className="section-heading">about me</h1>
            <div className="about-content">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur ea eius esse,
                        explicabo id iure molestiae, mollitia natus non odio pariatur possimus quia recusandae
                        repudiandae tempora unde ut voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi corporis
                        delectus fuga, in laboriosam magni molestias neque perspiciatis, quas quo repellat, repellendus
                        sapiente soluta ullam voluptate. Amet, error!</p>
                    <ul className="skill-list">
                        {
                            data.map((tag: { name: string }, index: number) => (
                                <li key={index}>{tag.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="photo">
                    <StaticImage
                        src="../../resources/images/exclude/photo.jpg"
                        alt="photo"
                        layout="constrained"
                        placeholder="blurred"
                        className="img"
                    />
                </div>
            </div>
        </section>
    );
};

const tagsQuery = graphql`
    {
        allContentfulProjectTags(
            sort: {fields: name, order: ASC}
            filter: {featured: {eq: true}}
        ) {
            nodes {
                name
            }
        }
    }
`
export default About;
