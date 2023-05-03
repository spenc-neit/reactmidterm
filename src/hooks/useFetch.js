import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useFetch = (url) => {
	console.log(url, "url")
	console.log(1)
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);
	console.log(2)

	useEffect(() => {
		const getData = async () => {
			setError(undefined);
			try {
				const response = await axios.get(`${baseUrl}/${url}`);
				setData(response.data);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);
	console.log({data, loading, error}, "h")
	return { data, loading, error };
};
