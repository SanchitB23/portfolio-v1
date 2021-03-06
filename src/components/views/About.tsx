import React, {useEffect, useRef} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";
import sr, {srConfig} from "../../config/utils/scrollReveal";
import {navLinks} from "../../config/constants";
import {OutboundLink} from "gatsby-plugin-google-gtag";

const About: React.FC = () => {
    const {allContentfulProjectTags: {nodes: data}} = useStaticQuery(tagsQuery)
    const revealSection = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sr?.reveal(revealSection.current, srConfig())
    }, [])
    return (
        <section id={navLinks[0]} ref={revealSection} className="about">
            <h1 className="section-heading">about me</h1>
            <div className="about-content">
                <div>
                    <p>Hello! My name is Sanchit and I enjoy creating things that live on the internet. My interest in
                        web development started back in 2016 when I tried building College Projects</p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working at&nbsp;
                        <OutboundLink target="_blank" href="https://cherishx.com/">a start-up</OutboundLink>, and&nbsp;
                        <OutboundLink target="_blank" href="https://newgensoft.com/">a huge corporation</OutboundLink>.
                        My main focus these days is building ReactJS Based Universal Payments portal for Tata Companies
                        at&nbsp;<OutboundLink target="_blank" href="https://www.tcs.com/">Tata Consultancy
                        Services</OutboundLink>.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className="skill-list">
                        {
                            data.map((tag: { name: string }, index: number) => (
                                <li key={index}>{tag.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="photo-wrapper">
                    <div className="photo">
                        <StaticImage
                            src="../../resources/images/Me.jpg"
                            alt="photo"
                            layout="constrained"
                            placeholder="blurred"
                            className="img"
                        />
                    </div>
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
