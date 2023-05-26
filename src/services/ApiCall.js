import axios from "axios";

// A file to help to make an request to the API
export const commonRequest = async (methods, url, body, headers) => {
	let config = {
		method: methods,
		url,
		header: headers ? headers : { "Content-Type": "application/json" },
		data: body,
	};

	try {
		const data = await axios(config);
		return data;
	} catch (err) {
		return err;
	}
};
