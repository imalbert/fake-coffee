import React from 'react';

// TODO: turn these into tailwind component classes
const types = {
	outlineWhite: 'text-white border-white border',
	outlineBlack: 'text-gray-900 border-gray-900 border',
	padding: 'p-2 px-8',
	icon: 'w-6 h-6 flex justify-center',
	round: 'rounded-full'
};

const Outline = ({ children, inverse }) => (
	<Button className={[ inverse ? types.outlineBlack : types.outlineWhite, types.padding ].join(' ')}>
		{children}
	</Button>
);
const RoundIcon = ({ children }) => (
	<Button className={[ types.outlineBlack, types.icon, types.round ].join(' ')}>{children}</Button>
);

const Button = ({ children, className }) => (
	<button type="button" className={className}>
		{children}
	</button>
);

export default {
	Outline,
	RoundIcon
};
