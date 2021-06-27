import React from 'react';
import Layout from "../components/layouts";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const Archives: React.FC = () => {
    return (
        <Layout>
            <section className="section-archives">
                <div className="illus-container">
                    <StaticImage
                        src="../resources/images/svg/undraw_work_in_progress_uhmv.svg"
                        alt="wip"
                        placeholder="blurred"
                        layout="constrained"
                        transformOptions={{fit: "cover"}}
                    />
                </div>
                <h1>WIP</h1>
                <Link to="/" className="page-404__link">Go Home</Link>
            </section>
        </Layout>
    );
};

export default Archives;
