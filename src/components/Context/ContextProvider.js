import React, { createContext, useState } from "react";

export const addData = createContext();
export const updateData = createContext();
export const deleteData = createContext();

const ContextProvider = (props) => {
	const [userAdd, setUserAdd] = useState("");
	const [userUpdate, setUserUpdate] = useState("");
	const [userDelete, setUserDelete] = useState("");

	return (
		<>
			<addData.Provider value={{ userAdd, setUserAdd }}>
				<updateData.Provider value={{ userUpdate, setUserUpdate }}>
					<deleteData.Provider value={{ userDelete, setUserDelete }}>
						{props.children}
					</deleteData.Provider>
				</updateData.Provider>
			</addData.Provider>
		</>
	);
};

export default ContextProvider;

// This file is needed because, whenever a successful registration is done,
// we want to show something on the home page
