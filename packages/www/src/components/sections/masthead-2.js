import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { HeaderLg, HeaderSm } from '../header/header';
import Hyperlink from '../hyperlink';
import HeaderLink from '../header/header-link';
import HeaderButton from '../header/header-button';
import Icon from '../icon/icon';

export default function() {
	// const [flyoutOpen, toggleFlyout] = useState(false)
	const [ burgerOpen, toggleBurger ] = useState(false);

	return (
		<div className="min-h-screen bg-primary flex flex-col">
			<div className="relative mx-6 sm:mx-10 lg:mx-16 mt-6 sm:mt-10 lg:mt-16">
				<div>
					<header className="relative">
						<HeaderLg padding={0}>
							<HeaderLink>
								<Icon icon="coffee" className="text-white" />
							</HeaderLink>

							<div className="sm:hidden">
								<HeaderButton onClick={() => toggleBurger(!burgerOpen)}>
									<Icon icon="hamburger" className="text-white" />
								</HeaderButton>
							</div>

							<div className="hidden sm:flex justify-between items-center space-x-8">
								<HeaderLink to="/coffee-plan">
									<div className="btn btn-gray-800">Create a fake plan</div>
								</HeaderLink>
								<HeaderLink to="/coffees" color="white">
									Shop
								</HeaderLink>
								<HeaderLink color="white">Sign in</HeaderLink>
								<HeaderLink>
									<Icon icon="shopping-cart" className="text-white" />
								</HeaderLink>
							</div>
						</HeaderLg>
						<HeaderSm isOpen={burgerOpen}>
							<nav className="grid row-gap-8">
								<HeaderLink to="/coffee-plan">
									<div className="btn btn-gray-800">Create a fake plan</div>
								</HeaderLink>
								<HeaderLink to="/coffees">
									<Icon icon="coffee" className="mr-4" />
									Shop
								</HeaderLink>
								<HeaderLink appendedClassNames="text-white">
									<Icon icon="sign-in-alt" className="mr-4" />
									Sign in
								</HeaderLink>
								<HeaderLink appendedClassNames="text-white">
									<Icon icon="shopping-cart" className="mr-4" />
									Shopping cart
								</HeaderLink>
							</nav>
						</HeaderSm>
					</header>
				</div>
			</div>
			<div className="flex-grow relative m-6 sm:m-10 lg:m-16 border-r border-b border-white mt-2 sm:mt-2 lg:mt-2">
				<div className="h-full text-white">
					<div className="h-full pt-0 sm:pt-10 lg:pt-16 pr-6 sm:pr-10 lg:pr-16 pb-6 sm:pb-10 lg:pb-16">
						<div className="h-full flex bg-primary border-8 border-gray-800shadow-none sm:shadow-xl">
							<div className="flex flex-col w-full h-full shadow-none sm:shadow-2xl">
								<div className="relative p-6">
									<div className="absolute top-0 right-0 p-6">
										<h1 className="text-5xl font-bold leading-9">20</h1>
										<h1 className="text-5xl font-bold leading-10">20</h1>
									</div>
									<h1 className="text-4xl sm:text-6xl uppercase font-bold tracking-tighter leading-none">
										Fake
									</h1>
									<h1 className="text-4xl sm:text-6xl uppercase font-bold tracking-tighter leading-10">
										Coffee
									</h1>
									<h1 className="text-4xl sm:text-6xl uppercase font-bold tracking-tighter leading-none">
										Imagine
									</h1>
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
					</div>
				</div>

				<div className="absolute bottom-0 right-0 mr-6 sm:mr-8" style={{ bottom: '-0.7rem' }}>
					<div className="flex items-start text-white lg:mr-10 space-x-4 bg-primary border-4 border-primary">
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
				</div>
			</div>
		</div>
	);
}
