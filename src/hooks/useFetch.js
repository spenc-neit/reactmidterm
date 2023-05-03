import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(undefined);

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
	return { data, loading, error };
};
