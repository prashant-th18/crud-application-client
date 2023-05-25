import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/edit/:id" element={<Edit />} />
				<Route path="userprofile/:id" element={<Profile />} />
			</Routes>
		</>
	);
};

export default App;
