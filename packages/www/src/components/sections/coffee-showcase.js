import React from 'react';
import ProductCard from '../card/product-card';

const CoffeeShowcase = ({ coffees }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3">
			{coffees.map((coffee) => <ProductCard key={coffee.slug} {...coffee} />)}
		</div>
	);
};

export default CoffeeShowcase;
