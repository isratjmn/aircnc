import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registerr from "../pages/Registerr/Registerr";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/Dashboard/AddRoom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/room/:id",
				element: (
					<PrivateRoute>
						<RoomDetails />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "register",
		element: <Registerr />,
	},
	{
		path: "dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "/dashboard/add-room",
				element: <AddRoom />,
			},
		],
	},
]);
