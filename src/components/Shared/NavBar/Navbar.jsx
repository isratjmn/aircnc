import React from "react";

import Logo from "./Logo";
import Search from "./Search";

import MenuDropdown from "./MenuDropDown";
import Containerr from "../Containerr";

const Navbar = () => {
	return (
		<div className="fixed w-full bg-white z-10 shadow-md">
			<div className="py-4 border-b-[1px]">
				<Containerr>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<Logo />
						<Search />
						<MenuDropdown />
					</div>
				</Containerr>
				
			</div>
		</div>
	);
};

export default Navbar;
