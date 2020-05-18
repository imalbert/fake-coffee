import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Hyperlink from './hyperlink';
import Text from './text';

const Footer = () => (
	<footer className="container mx-auto">
		<div className="py-4 sm:py-12 grid grid-cols-1 sm:grid-cols-3">
			<div className="grid grid-cols-2">
				<div className="flex flex-col justify-center items-center sm:items-start">
					<Text.l2 className="font-bold uppercase">News</Text.l2>
					<Text.l2 className="font-bold uppercase">Catalog</Text.l2>
					<Text.l2 className="font-bold uppercase">Contacts</Text.l2>
				</div>
				<div className="flex flex-col justify-center items-center sm:items-start">
					<Text.l2 className="font-bold uppercase">About us</Text.l2>
					<Text.l2 className="font-bold uppercase">Delivery</Text.l2>
					<Text.l2 className="font-bold uppercase">FAQ</Text.l2>
				</div>
			</div>

			<div className="py-4 sm:py-0 sm:space-y-1 flex flex-col justify-center">
				<Text.h3 className="text-center uppercase font-bold tracking-tight">FakeCoffee</Text.h3>
				<div className="space-x-8 text-center">
					<Hyperlink href="https://github.com/imalbert" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</Hyperlink>
					<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
						<FontAwesomeIcon icon={faLinkedin} />
					</Hyperlink>
					<Hyperlink href="mailto:albert.s.manuel@gmail.com">
						<FontAwesomeIcon icon="envelope" />
					</Hyperlink>
				</div>
			</div>

			<div className="p-4 sm:p-0 flex flex-col">
				<input
					id="subscribe-email"
					className="appearance-none bg-gray-100 border-b-2 p-2 text-xs font-bold"
					placeholder="ENTER EMAIL"
				/>

				<div className="p-2 flex justify-between">
					<Text.l2 className="font-bold uppercase">Subscribe</Text.l2>
					<FontAwesomeIcon icon="chevron-right" size="xs" />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
