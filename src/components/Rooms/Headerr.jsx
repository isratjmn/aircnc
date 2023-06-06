import React from "react";
import Heading from "../Heading/Heading";

const Headerr = () => {
	return (
		<>
			<Heading title="Kecamatan Ubud, Bali" subtitle="Indonesia" />
			<div className="w-full md:h-[60vh] overflow-hidden">
				<img className="object-cover w-full"
					src="https://balidave.com/wp-content/uploads/2022/11/best-hotel-bali.jpeg"
					alt="headerImg"
				/>
			</div>
		</>
	);
};

export default Headerr;
