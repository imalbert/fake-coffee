import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	console.log(`Welcome to ${data.site.siteMetadata.title}. Get your fake coffee for free.`);

	return <div className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">{children}</div>;
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
