import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/rooms";

const AddRoom = () => {
	const { user } = useContext(AuthContext);
	const [dates, setDates] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: "selection",
	});
	const [loading, setLoading] = useState(false);
	const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

	// Handle Form Submit
	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		const location = event.target.location.value;
		const title = event.target.title.value;
		const from = dates.startDate;
		const to = dates.endDate;
		const price = event.target.price.value;
		const total_guest = event.target.total_guest.value;
		const bedrooms = event.target.bedrooms.value;
		const bathrooms = event.target.bathrooms.value;
		const description = event.target.description.value;
		const category = event.target.category.value;

		const image = event.target.image.files[0];

		// Upload Image
		imageUpload(image)
			.then((data) => {
				const roomData = {
					img: data.data.display_url,
					location,
					title,
					from,
					to,
					price: parseFloat(price),
					total_guest,
					bedrooms,
					bathrooms,
					description,
					image: data.data.display_url,
					host: {
						name: user?.displayName,
						image: user?.photoURL,
						email: user?.email,
					},
					category,
				};

				// POST ROOM DATA TO THE SERVER
				addRoom(roomData)
					.then((data) => console.log(data))
					.catch((err) => {
						console.log(err.message);
					});
				setLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
				setLoading(false);
			});

		console.log(location);
	};

	const handleImageChange = (image) => {
		console.log(image);
		setUploadButtonText(image.name);
	};

	const handleDates = (ranges) => {
		// return console.log(ranges.selection);
		setDates(ranges.selection);
	};

	return (
		<div>
			<AddRoomForm
				handleSubmit={handleSubmit}
				loading={loading}
				handleImageChange={handleImageChange}
				uploadButtonText={uploadButtonText}
				dates={dates}
				handleDates={handleDates}
			/>
		</div>
	);
};

export default AddRoom;
