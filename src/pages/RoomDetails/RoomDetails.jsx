import React from "react";
import Containerr from "../../components/Shared/Containerr";

import Headerr from "../../components/Rooms/Headerr";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";

const RoomDetails = () => {
	return (
		<Containerr>
			<div className="max-w-screen-lg mx-auto ">
				<div className="flex flex-col gap-6">
					<Headerr />
					<div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
						<RoomInfo />
						<div className="mb-10 md:col-span-3 order-first md:order-last">
							<RoomReservation />
						</div>
					</div>
				</div>
			</div>
		</Containerr>
	);
};

export default RoomDetails;
