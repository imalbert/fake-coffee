import React, { useState } from 'react';

import { HeaderLg, HeaderSm } from '../header/header-old';
import HeaderLink from './header-link';
import HeaderButton from './header-button';
import Icon from '../icon/icon';

const SubpageHeader = ({ title, subtitle }) => {
	const [ burgerOpen, toggleBurger ] = useState(false);

	return (
		<div className="container mx-auto">
			<header className="relative">
				<HeaderLg>
					<HeaderLink>
						<Icon icon="coffee" size="lg" />
					</HeaderLink>

					<HeaderButton>
						<h1 className="text-3xl font-bold tracking-tight leading-8 text-center">{title}</h1>
						<p className="uppercase font-normal text-xs text-center">{subtitle}</p>
					</HeaderButton>

					<HeaderButton
						onClick={() => {
							toggleBurger(!burgerOpen);
						}}
					>
						<Icon icon="hamburger" size="lg" />
					</HeaderButton>

					<HeaderSm alwaysShow isOpen={burgerOpen}>
						<nav className="grid row-gap-8">
							<HeaderLink to="/coffee-plan">
								<Icon icon="calendar-check" size="lg" className="mr-4" />
								Create a fake plan
							</HeaderLink>
							<HeaderLink to="coffees">
								<Icon icon="coffee" size="lg" className="mr-4" />
								Coffee
							</HeaderLink>
							<HeaderLink>
								<Icon icon="hammer" size="lg" className="mr-4" />
								Equipment
							</HeaderLink>
							<HeaderLink>
								<Icon icon="portrait" size="lg" className="mr-4" />
								About us
							</HeaderLink>
							<HeaderLink>
								<Icon icon="sign-in-alt" size="lg" className="mr-4" />
								Sign in
							</HeaderLink>
						</nav>
					</HeaderSm>
				</HeaderLg>
			</header>
		</div>
	);
};

export default SubpageHeader;
