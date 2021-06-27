import React, {useEffect, useState} from 'react';
import Layout from "../components/layouts";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {navDelay} from "../config/utils";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const NotFoundPage: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const content = (
        <section className="page-404">
            <div className="illus-container">
                <StaticImage
                    src="../resources/images/svg/undraw_page_not_found_su7k.svg"
                    alt="wip"
                    placeholder="blurred"
                    layout="constrained"
                    transformOptions={{fit: "cover"}}
                />
            </div>
            <h2 className="page-404__subtitle">Page Not Found</h2>
            <Link to="/" className="page-404__link">Go Home</Link>
        </section>
    );
    return (
        <Layout isHome={false} title="Page Not Found">
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition timeout={500} classNames="fadeup">
                        {content}
                    </CSSTransition>
                )}
            </TransitionGroup>
        </Layout>
    );
};

export default NotFoundPage;
