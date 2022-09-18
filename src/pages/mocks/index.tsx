import React from 'react';


const Test: React.FC = () => {
    // const data = useStaticQuery(query)
    return (
        /*
         * <Loader finishLoading={(v) => console.log("finish loading", v)}/>
         * <a href={data.allContentfulAboutMe.nodes[0].resume.file.url}>Click Me</a>
         */
        <div>Test Component</div>
    )
};

/*
 *export const query = graphql`
 *  {
 *      allContentfulAboutMe {
 *          nodes {
 *              resume {
 *                  file {
 *                      url
 *                  }
 *              }
 *          }
 *      }
 *  }
 *`
 */
export default Test;
