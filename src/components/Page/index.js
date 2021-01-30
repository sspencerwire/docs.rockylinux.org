import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from '../Navbar';

/**
 * @interface PageMetaObject
 * @param {string} title The title of the page
 */

/**
 * @interface PageOptions
 * @property {import("react").ReactChildren} children The elements to render on the page
 * @property {PageMetaObject} meta The metadata to load into the page.
 */

/**
 * A default page container, used to template other pages in the site.
 * 
 * @param {PageOptions} options The options to instantiate the site with.
 */
export default ({ children, meta: { title, description, keywords } }) => {
    return (
        <>
            <Helmet>
                <title>{title} - Rocky Linux Documentation</title>
                <meta name="description" content={ description ? description : 'The documentation for Rocky Linux, the community-driven enterprise operating system.' } />
                <meta name="keywords" content={ keywords ? keywords : 'rocky linux, documentation, docs, tutorials, learning, linux, sysadmin' } />
            </Helmet>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
};
