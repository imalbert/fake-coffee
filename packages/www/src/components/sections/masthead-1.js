import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Header from '../header/header-old';
import Hyperlink from '../hyperlink';
import Text from '../text';

const masthead1 = () => (
	<div className="flex flex-col bg-primary">
		<Header />
		<div className="flex-grow grid grid-cols-1 lg:grid-cols-3 sm:p-6 mt-0 sm:m-6 sm:border-8 border-primary-light">
			<div className="p-6 space-y-10 hidden lg:flex flex-col justify-between">
				<div>
					<Text.h1 className="text-white uppercase">Fake</Text.h1>
					<Text.h1 className="text-white uppercase">Coffee</Text.h1>
				</div>
				<div className="flex flex-col items-start space-y-4 text-white">
					<Hyperlink href="https://github.com/imalbert">
						<FontAwesomeIcon size="lg" icon={faGithub} />
					</Hyperlink>
					<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
						<FontAwesomeIcon size="lg" icon={faLinkedin} />
					</Hyperlink>
					<Hyperlink href="mailto:albert.s.manuel@gmail.com">
						<FontAwesomeIcon size="lg" icon="envelope" />
					</Hyperlink>
				</div>
				<div>
					<Text.h2 className="text-primary-light">20</Text.h2>
					<Text.h2 className="text-primary-light">20</Text.h2>
				</div>
			</div>

			<div className="relative lg:items-center justify-center flex flex-col">
				<div className="px-6 lg:absolute text-left lg:text-center top-0 left-0 right-0 space-x-6 sm:text-white">
					<Hyperlink href="https://github.com/imalbert">
						<FontAwesomeIcon size="lg" icon={faGithub} />
					</Hyperlink>
					<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
						<FontAwesomeIcon size="lg" icon={faLinkedin} />
					</Hyperlink>
					<Hyperlink href="mailto:albert.s.manuel@gmail.com">
						<FontAwesomeIcon size="lg" icon="envelope" />
					</Hyperlink>
				</div>

				<div className="w-full">
					<div className="bg-primary sm:border-8 border-gray-900 sm:shadow-xl">
						<div className="flex flex-col w-full sm:shadow-2xl">
							<div className="relative p-6">
								<div className="absolute top-0 right-0 p-6">
									<Text.h2 className="text-primary-light">20</Text.h2>
									<Text.h2 className="text-primary-light">20</Text.h2>
								</div>

								<Text.h1 className="uppercase">Fake</Text.h1>
								<Text.h1 className="uppercase">Coffee</Text.h1>

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
								<div className="bg-gray-800 transition ease-in-out duration-150 transform hover:scale-110" />
								<div className="bg-gray-900 transition ease-in-out duration-150 transform hover:scale-110" />
							</div>
						</div>
					</div>

					<div className="hidden lg:block text-left lg:text-center absolute bottom-0 left-0 right-0 space-x-4 text-primary-light">
						<Hyperlink href="https://github.com/imalbert" target="_blank">
							<FontAwesomeIcon size="lg" icon={faGithub} />
						</Hyperlink>
						<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
							<FontAwesomeIcon size="lg" icon={faLinkedin} />
						</Hyperlink>
						<Hyperlink href="mailto:albert.s.manuel@gmail.com">
							<FontAwesomeIcon size="lg" icon="envelope" />
						</Hyperlink>
					</div>
				</div>
			</div>
			<div className="text-right p-6 hidden lg:flex flex-col justify-between">
				<div>
					<Text.h2 className="text-white">20</Text.h2>
					<Text.h2 className="text-white">20</Text.h2>
				</div>
				<div className="flex flex-col items-end space-y-4 text-primary-light">
					<Hyperlink href="https://github.com/imalbert">
						<FontAwesomeIcon size="lg" icon={faGithub} />
					</Hyperlink>
					<Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
						<FontAwesomeIcon size="lg" icon={faLinkedin} />
					</Hyperlink>
					<Hyperlink href="mailto:albert.s.manuel@gmail.com">
						<FontAwesomeIcon size="lg" icon="envelope" />
					</Hyperlink>
				</div>
				<div>
					<Text.h1 className="text-primary-light uppercase">Fake</Text.h1>
					<Text.h1 className="text-primary-light uppercase">Coffee</Text.h1>
				</div>
			</div>
		</div>
	</div>
);

export default masthead1;
