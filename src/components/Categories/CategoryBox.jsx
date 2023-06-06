import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
	const [params, setParams] = useSearchParams();
	const value = params.get("category");
	const navigate = useNavigate();

	const handleClick = () => {
		let currentQuery = {};
		if (params) {
			currentQuery = queryString.parse(params.toString());
		}
		const undatedQuery = {
			...currentQuery,
			category: label,
		};

		const url = queryString.stringifyUrl(
			{
				url: "/",
				query: undatedQuery,
			},
			{ skipNull: true }
		);
		navigate(url);
	};

	console.log(value);
	return (
		<div
			onClick={handleClick}
			className="flex cursor-pointer flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500"
		>
			<Icon size={26} />
			<div className="text-sm font-medium">{label}</div>
		</div>
	);
};

export default CategoryBox;