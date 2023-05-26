import React, { createContext, useState } from "react";

export const addData = createContext();
export const updateData = createContext();

const ContextProvider = (props) => {
	const [userAdd, setUserAdd] = useState("");
	const [userUpdate, setUserUpdate] = useState("");

	return (
		<>
			<addData.Provider value={{ userAdd, setUserAdd }}>
				<updateData.Provider value={{ userUpdate, setUserUpdate }}>
					{props.children}
				</updateData.Provider>
			</addData.Provider>
		</>
	);
};

export default ContextProvider;

// This file is needed because, whenever a successful registration is done,
// we want to show something on the home page
