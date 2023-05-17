import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import "./OneEntry.css";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ProductDetail = () => {
	const { id } = useParams();
	// const id = props.id
	const { data: entry, loading, error } = useFetch("products/" + id);
	const {theme} = useContext(ThemeContext)

	if (entry.length != 0) {
		return (
			<Box detail>
				<img src={`${entry.image}`} className="prodimg2" />
				<div>
					<Text color={theme.foreground} size="25px">
						{entry.title}
					</Text>
					<br />
					<Text color={theme.detailcolor} size="20px">
						{entry.category} - {entry.rating.rate} stars ({entry.rating.count}{" "} ratings)
					</Text>
					<Text color={theme.foreground} size="18px">
						{entry.description}
					</Text>
					<br />
					<Text color={theme.foreground} size="20px">
						${entry.price}
					</Text>{" "}
					<br />
					<Text color={theme.linkcolor} size="12px" link linkSrc="../products">
						Go back
					</Text>
				</div>
			</Box>
		);
	}
};

export default ProductDetail;
