import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Text from '../text';

const ProductCard = ({ img, title, price, slug }) => (
	<div className="p-6 relative w-full bg-gray-100">
		<Img className="mx-auto" alt={title} fluid={img.childImageSharp.fluid} />
		<Link
			to={slug}
			className="p-4 opacity-0 hover:opacity-50 transition duration-150 bg-gray-300 flex flex-col justify-center items-center absolute inset-0"
		>
			<Text.l2 className="font-bold">{title}</Text.l2>
			<Text.l2 className="font-bold">{price}</Text.l2>
		</Link>
	</div>
);

export default ProductCard;
