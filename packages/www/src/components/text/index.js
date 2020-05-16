import React from 'react';

import Title from './title';
import Subtitle from './subtitle';
import Heading1 from './heading1';

const P = ({ cls, children }) => <p className={cls}>{children}</p>;

export default {
	Title,
	Subtitle,
	Heading1,
	h1: ({ children, className = '' }) => <P cls={`${className} text-6xl`}>{children}</P>,
	h2: ({ children, className = '' }) => (
		<P cls={`${className} font-bold text-4xl leading-10 tracking-tight`}>{children}</P>
	),
	h3: ({ children, className = '' }) => <P cls={`${className} text-2xl`}>{children}</P>,
	l1: ({ children, className = '' }) => <P cls={`${className} font-extrabold uppercase text-sm`}>{children}</P>,
	l2: ({ children, className = '' }) => <P cls={`${className} font-bold text-gray-700 text-sm`}>{children}</P>,
	p1: ({ children, className = '' }) => <P cls={`${className} text-sm`}>{children}</P>,
	p2: ({ children, className = '' }) => <P cls={`${className} text-xs`}>{children}</P>
};
