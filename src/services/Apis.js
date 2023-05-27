// This file will help in sending the request from front-end to backend

import { BASE_URL } from "./helper";
import { commonRequest } from "./ApiCall";

export const registerFunction = async (data, header) => {
	return await commonRequest("POST", `${BASE_URL}/user/register`, data, header);
};

export const userDetailsFunction = async (name, gender, status, sort, page) => {
	return await commonRequest(
		"GET",
		`${BASE_URL}/details?search=${name}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`,
		""
	);
};

export const getSingleUser = async (id) => {
	return await commonRequest("GET", `${BASE_URL}/user/${id}`, "");
};

export const editSingleUser = async (id, data, header) => {
	return await commonRequest(
		"PUT",
		`${BASE_URL}/user/edit/${id}`,
		data,
		header
	);
};

export const deleteSingleUser = async (id) => {
	return await commonRequest("DELETE", `${BASE_URL}/user/delete/${id}`, {});
};

export const updateStatus = async (id, status) => {
	return await commonRequest("PUT", `${BASE_URL}/user/status/${id}`, {
		status,
	});
};

export const usersExportFunction = async () => {
	return await commonRequest("GET", `${BASE_URL}/userexport`, "");
};
