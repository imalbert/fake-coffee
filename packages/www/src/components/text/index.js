import React from 'react';

import Title from './title';
import Subtitle from './subtitle';
import Heading1 from './heading1';

const P = ({ cls, children }) => <p className={cls}>{children}</p>;

export default {
	Title,
	Subtitle,
	Heading1,
	h1: ({ children, className = '' }) => <P cls={`${className} text-5xl sm:text-6xl`}>{children}</P>,
	h2: ({ children, className = '' }) => <P cls={`${className} text-3xl sm:text-4xl`}>{children}</P>,
	h3: ({ children, className = '' }) => <P cls={`${className} text-1xl sm:text-2xl`}>{children}</P>,
	l1: ({ children, className = '' }) => <P cls={`${className} font-extrabold uppercase text-sm`}>{children}</P>,
	l2: ({ children, className = '' }) => <P cls={`${className} font-bold text-sm`}>{children}</P>,
	p1: ({ children, className = '' }) => <P cls={`${className} text-sm`}>{children}</P>,
	p2: ({ children, className = '' }) => <P cls={`${className} text-xs`}>{children}</P>
};
