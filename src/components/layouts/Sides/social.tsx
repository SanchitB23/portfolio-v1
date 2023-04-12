import React from 'react';
import Side from './index';
import {LayoutProps} from "../Interface";
import Icon from "../../icons/icons";
import {OutboundLink} from "gatsby-plugin-google-gtag";
import {graphql, useStaticQuery} from "gatsby";

interface QueryResInterface {
    allContentfulSocialMediaUrLs: {
        nodes: [{
            socialUrl: string;
            name: string;
        }]
    }
}

const Social: React.FC<LayoutProps> = ({isHome}) => {

    const {allContentfulSocialMediaUrLs: {nodes: socialMedia}}: QueryResInterface = useStaticQuery(query)
    return (
        <Side isHome={isHome || true} orientation="left">
            <ul className="side-social">
                {socialMedia &&
                    socialMedia.map(({socialUrl, name}, i) => (
                        <li key={i}>
                            <OutboundLink href={socialUrl} aria-label={name} target="_blank" rel="noreferrer">
                                <Icon name={name}/>
                            </OutboundLink>
                        </li>
                    ))}
            </ul>
        </Side>
    )
};

const query = graphql`
    {
        allContentfulSocialMediaUrLs {
            nodes {
                socialUrl
                name
            }
        }
    }
`
export default Social;
