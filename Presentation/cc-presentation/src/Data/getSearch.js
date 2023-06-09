import axios from "axios";
const getSearch = async (search, offSet = 0) => {
	try {
		const formData = new FormData();
		formData.append("search", search);
		formData.append("offset", offSet);

		const response = await axios.post("http://localhost:1310/comics/search", new URLSearchParams(formData).toString(), {
			headers: { "content-type": "application/x-www-form-urlencoded" },
		});
		return response.data;
	} catch (e) {
		return e;
	}
};

export default getSearch;
