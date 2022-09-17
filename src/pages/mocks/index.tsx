import React from 'react';
import {graphql, useStaticQuery} from "gatsby";


const Test: React.FC = () => {
    const data = useStaticQuery(query)
    console.log("data", data)
    return (
        // <Loader finishLoading={(v) => console.log("finish loading", v)}/>
        <a href={data.allContentfulAboutMe.nodes[0].resume.file.url}>Click Me</a>

    )
};

export const query = graphql`
    {
        allContentfulAboutMe {
            nodes {
                resume {
                    file {
                        url
                    }
                }
            }
        }
    }
`
export default Test;
