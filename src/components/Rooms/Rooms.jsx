import React, { useEffect, useState } from "react";
import Containerr from "../Shared/Containerr";
import Card from "./Card";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
	const [params, setParams] = useSearchParams();
	const category = params.get("category");
	console.log(category);

	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		getAllRooms()
			.then((data) => {
				if (category) {
					const filtered = data.filter(
						(room) => room.category === category
					);
					setRooms(filtered);
				} else {
					setRooms(data);
				}
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [category]);

	if (loading) {
		return <Loader />;
	}

	return (
		<Containerr>
			{rooms && rooms.length > 0 ? (
				<div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
					{rooms.map((room, index) => (
						<Card key={index} room={room} />
					))}
				</div>
			) : (
				<div className="pt-12">
					<Heading
						title="No Rooms Available in this category!!"
						subtitle="Please Select other categories"
						center={true}
					/>
				</div>
			)}
		</Containerr>
	);
};

export default Rooms;
