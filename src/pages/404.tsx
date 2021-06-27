import React, {useEffect, useState} from 'react';
import Layout from "../components/layouts";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {navDelay} from "../config/utils";
import {Link} from "gatsby";

const NotFoundPage: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const content = (
        <section className="page-404">
            <h1 className="page-404__title">404</h1>
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
