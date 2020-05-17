import React from 'react';

const ButtonOutline = ({ children }) => (
	<button type="button" className="text-white border-white border p-2 px-8">
		{children}
	</button>
);

export default {
	Outline: ButtonOutline
};
