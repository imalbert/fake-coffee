import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Header from '../header/header';
import Hyperlink from '../hyperlink';

const masthead1 = () => (
	<div className="flex flex-col min-h-screen bg-primary">
		<Header />
		<div className="flex-grow grid grid-cols-1 lg:grid-cols-3 p-6 mt-0 m-6 border-8 border-primary-light">
			<div className="text-white p-6 hidden lg:flex flex-col justify-between">
				<div>
					<h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">Fake</h1>
					<h1 className="text-6xl uppercase font-bold tracking-tighter leading-10">Coffee</h1>
					<h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">Imagine</h1>
				</div>
				<div className="flex flex-col items-start space-y-6 text-white">
					<Hyperlink href="https://github.com/imalbert">
						<FontAwesomeIcon icon={faGithub} />
					</Hyperlink>
					<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
						<FontAwesomeIcon icon={faLinkedin} />
					</Hyperlink>
					<Hyperlink href="mailto:albert.s.manuel@gmail.com">
						<FontAwesomeIcon icon="envelope" />
					</Hyperlink>
				</div>
				<div className="text-primary-light">
					<h1 className="text-5xl font-bold leading-9">20</h1>
					<h1 className="text-5xl font-bold leading-10">20</h1>
				</div>
			</div>
			<div className="items-center flex relative">
				<div className="absolute top-0 left-0 right-0 space-x-6 text-center text-white">
					<Hyperlink href="https://github.com/imalbert">
						<FontAwesomeIcon icon={faGithub} />
					</Hyperlink>
					<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
						<FontAwesomeIcon icon={faLinkedin} />
					</Hyperlink>
					<Hyperlink href="mailto:albert.s.manuel@gmail.com">
						<FontAwesomeIcon icon="envelope" />
					</Hyperlink>
				</div>
				<div className="w-full">
					<div className="bg-primary border-8 border-gray-800shadow-xl text-gray-800">
						<div className="flex flex-col w-full shadow-2xl">
							<div className="relative p-6">
								<div className="absolute top-0 right-0 p-6">
									<h1 className="text-5xl font-bold leading-9">20</h1>
									<h1 className="text-5xl font-bold leading-10">20</h1>
								</div>
								<h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">Fake</h1>
								<h1 className="text-6xl uppercase font-bold tracking-tighter leading-10">Coffee</h1>
								<h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">Imagine</h1>
								<p className="ml-1 mt-4 uppercase text-xs leading-tight">
									Best, made-up coffees.
									<br />
									Instant delivery for free!
									<br />
								</p>
							</div>
							<div className="flex-grow grid grid-cols-6 w-full h-16 gap-0 p-2">
								<div className="bg-primary-light transition ease-in-out duration-150 transform hover:scale-110" />
								<div className="bg-primary transition ease-in-out duration-150 hover:shadow-lg" />
								<div className="bg-primary-dark transition ease-in-out duration-150 transform hover:scale-110" />
								<div className="bg-gray-700 transition ease-in-out duration-150 transform hover:scale-110" />
								<div className="bg-gray-800transition ease-in-out duration-150 transform hover:scale-110" />
								<div className="bg-gray-900 transition ease-in-out duration-150 transform hover:scale-110" />
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 space-x-6 text-center text-primary-light">
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
			</div>
			<div className="text-right p-6 hidden lg:flex flex-col justify-between">
				<div className="text-white">
					<h1 className="text-5xl font-bold leading-9">20</h1>
					<h1 className="text-5xl font-bold leading-10">20</h1>
				</div>
				<div className="flex flex-col items-end space-y-6 text-primary-light">
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
				<div className="text-primary-light">
					<h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">Fake</h1>
					<h1 className="text-6xl uppercase font-bold tracking-tighter leading-10">Coffee</h1>
					<h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">Imagine</h1>
				</div>
			</div>
		</div>
	</div>
);

export default masthead1;
