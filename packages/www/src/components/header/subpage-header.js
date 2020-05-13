import React from 'react';

import { HeaderLg, HeaderSm } from './header';
import HeaderLink from './header-link';
import Icon from '../icon/icon';

const SubpageHeader = ({ children }) => (
	<div className="container mx-auto">
		<header className="relative">
			<HeaderLg>
				<HeaderLink>
					<Icon icon="coffee" size="lg" />
				</HeaderLink>

				<HeaderLink>
					<h1 className="text-3xl font-bold tracking-tight leading-8 text-center">Coffee</h1>
					<p className="uppercase font-normal text-xs text-center">around the globe</p>
				</HeaderLink>

				<HeaderLink>
					<Icon icon="hamburger" size="lg" />
				</HeaderLink>
				<HeaderSm alwaysShow>
					<nav className="grid row-gap-8">
						<HeaderLink>
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

export default SubpageHeader;
