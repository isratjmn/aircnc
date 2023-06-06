import React from "react";
import Containerr from "../Shared/Containerr";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
const Categories = () => {
	return (
		<div>
			<Containerr>
				<div className="pt-4 flex flex-row item-center justify-between overflow-x-auto font-bold">
					{categories.map((item) => (
						<CategoryBox
							key={item.label}
							label={item.label}
							icon={item.icon}
						/>
					))}
				</div>
			</Containerr>
		</div>
	);
};

export default Categories;
