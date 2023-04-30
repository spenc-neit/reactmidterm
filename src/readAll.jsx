import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import {
	Link,
	Route,
	Routes,
	useNavigate,
	BrowserRouter,
} from "react-router-dom";

function ReadAll() {
	var { data: prods, loading, error } = useFetch("products");

	if (error) {
		return <p>An error occurred: {error}</p>;
	}

	if (loading) {
		return <p>loading</p>;
		//if loading is true, then return the element and stop running the code
	}

	const output = prods.map((entry) => {
        return(
		<Box>
			<img src={`${entry.image}`} className="prodimg" />
			<Text color="navy" size="18px" link linkSrc={`${entry.id}`}>
				{entry.title}
			</Text>
		</Box>)
	});

    console.log(output, "output")

	return (
		<>
			<div style={{display:"initial"}}>{output}</div>
		</>
	);
}

export { ReadAll };
