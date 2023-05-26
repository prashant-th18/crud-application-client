// This file will help in sending the request from front-end to backend

import { BASE_URL } from "./helper";
import { commonRequest } from "./ApiCall";

export const registerFunction = async (data, header) => {
	return await commonRequest("POST", `${BASE_URL}/user/register`, data, header);
};
