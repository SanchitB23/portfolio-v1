import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";

const About = () => {
  const {allContentfulProjectTags: {nodes: data}} = useStaticQuery(graphql`
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
  `)
    console.log(data)
    return (
        <section>
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

export default About;
