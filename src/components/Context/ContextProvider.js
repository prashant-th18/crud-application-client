import React, { createContext, useState } from "react";

export const addData = createContext();

const ContextProvider = (props) => {
	const [userAdd, setUserAdd] = useState("");

	return (
		<>
			<addData.Provider value={{ userAdd, setUserAdd }}>
				{props.children}
			</addData.Provider>
		</>
	);
};

export default ContextProvider;

// This file is needed because, whenever a successful registration is done,
// we want to show something on the home page
