import React, { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<img
				className="rounded-full"
				src={user && user.photoURL ? user.photoURL : avatarImg}
				alt="avatar"
				height="30"
				width="30"
			/>
		</div>
	);
};

export default Avatar;
