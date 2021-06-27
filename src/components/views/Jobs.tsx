import React, {useEffect, useRef, useState} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import {CSSTransition} from "react-transition-group";
import sr, {srConfig} from "../../config/utils/scrollReveal";
import {navLinks} from "../../config/constants";

interface JobType {
    allContentfulJobs: {
        nodes:
            [{
                url: string
                title: string
                company: string
                companyShort: string
                dateRange: string
                description: [string]
            }]

    }
}

const Jobs: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState(0)
    /*GraphQL Query*/
    const data: JobType = useStaticQuery(jobsQuery)
    const {allContentfulJobs: {nodes: jobs}} = data;
    const revealSection = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sr?.reveal(revealSection.current, srConfig())
    }, [])
    /*HTML Return */
    return (
        <section id={navLinks[1]} className="jobs" ref={revealSection}>
            <h1 className="section-heading">Where I've Worked</h1>
            <div className="jobs__content">
                <div className="tabs-list">
                    {jobs.map(({company, companyShort}, index) => (
                        <StyledButton
                            className="tabs-list__item"
                            key={index}
                            isActive={activeTabId === index}
                            onClick={() => setActiveTabId(index)}
                            id={`tabs-list__item--${index}`}
                            role="tab"
                            tabIndex={activeTabId === index ? 0 : -1}
                            aria-selected={activeTabId === index}
                            aria-controls={`panel-${index}`}
                        >
                            <div className="tabs-list__item--long">{company}</div>
                            <div className="tabs-list__item--short">{companyShort || company}</div>
                        </StyledButton>

                    ))}
                    <StyledHighlight activeTabId={activeTabId} className="tabs-list__highlight"/>
                </div>
                <div className="tab-panels">
                    {
                        jobs && jobs.map((job, index) => {
                            const {company, title, description, url, dateRange, companyShort} = job;
                            return (
                                <CSSTransition key={index} in={activeTabId === index} timeout={250} classNames="fade">
                                    <div
                                        className="tab-panels__item"
                                        id={`panel-${index}`}
                                        role="tabpanel"
                                        tabIndex={activeTabId === index ? 0 : -1}
                                        aria-labelledby={`tab-${index}`}
                                        aria-hidden={activeTabId !== index}
                                        hidden={activeTabId !== index}
                                    >

                                        <h3 className="tab-panels__item__company">
                                            {title}
                                            <span>
                                                 &nbsp;@&nbsp;
                                                <a href={url}
                                                   className="tab-panels__item__company--short">{companyShort || company}</a>
                                                <a href={url} className="tab-panels__item__company--long">{company}</a>
                                            </span>
                                        </h3>
                                        <p className="tab-panels__item__range">{dateRange}</p>
                                        <ul className="fancy-list">
                                            {description.map((text, index) => (
                                                <li key={index}>{text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </CSSTransition>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

/*Styled Components*/
const StyledButton = styled.div
    < {isActive: boolean} > `
        color: ${({isActive}) => {
        return (isActive ? 'var(--orange)' : 'var(--slate)')
    }} !important;
        `

const StyledHighlight = styled.div
    < {activeTabId: number} > `
        transform: translateY(calc(${({activeTabId}) => activeTabId} * var(--tab-height)));
        @media (max-width: 600px) {
        transform: translateX(calc(${({activeTabId}) => activeTabId} * var(--tab-width)));
        }
        `

/*GraphQL Query*/
const jobsQuery = graphql`
    {
        allContentfulJobs(sort: {fields: from, order: DESC}) {
            nodes {
                url
                title
                company
                dateRange
                description
                companyShort
            }
        }
    }
`

export default Jobs;

