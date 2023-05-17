import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Box } from "./Box";
import { Text } from "./Text";
import { ThemeContext } from "../ThemeContext";

function Products() {
	const { data: prods, loading, error } = useFetch("products");
	const {theme} = useContext(ThemeContext)

	if (error) {
		return <p>An error occurred: {error}</p>;
	}

	if (loading) {
		return <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" style={{height:"50px"}} />;
		//if loading is true, then return the element and stop running the code
	}

	const output = prods.map((entry) => {
        return(
		<Box key={entry.id}>
			<img src={`${entry.image}`} className="prodimg" />
			<Text color={theme.linkcolor} size="18px" link linkSrc={`${entry.id}`}>
				{entry.title}
			</Text>
		</Box>)
	});

	return (
		<>
			<div style={{display:"initial"}}>{output}</div>
		</>
	);
}

export { Products };
