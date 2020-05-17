import React from 'react';

import HeaderLink from './header-link';
import HeaderButton from './header-button';
import Icon from '../icon/icon';
import Text from '../text';

const Header = () => (
	<header className="container mx-auto text-white">
		<div className="flex justify-between">
			<nav className="flex-1 space-x-2 flex items-center">
				<HeaderButton
				// appendedClassNames="lg:hidden"
				// onClick={() => toggleBurger(!burgerOpen)}
				>
					<Icon icon="hamburger" />
				</HeaderButton>
				<Text.l2 className="uppercase">Menu</Text.l2>
			</nav>

			<Text.h3 className="flex-1 text-center uppercase font-bold tracking-tight">FakeCoffee</Text.h3>

			<nav className="flex-1 space-x-2 flex items-center justify-end">
				<HeaderButton>
					<Icon icon="search" />
				</HeaderButton>
				<HeaderButton>
					<Icon icon="shopping-cart" />
				</HeaderButton>
				<HeaderButton>
					<div className="flex items-center">
						<Text.l2 className="">EN</Text.l2>
						<Icon icon="chevron-down" size="sm" />
					</div>
				</HeaderButton>
			</nav>
		</div>
	</header>
);

export default Header;
