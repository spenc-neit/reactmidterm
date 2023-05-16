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

	document.querySelector('html').setAttribute("style", "height:100%;")
	//had to put this in here else the content would be vertically centered
	//if you get here before app.jsx, go there, lines 13-17 for more info

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
					{/*I don't know what in the world is going with the line above but ProductDetail doesn't work at ALL until I comment it out and then un-comment it and then suddenly everything is fine. I'm gonna leave it commented out bc it isn't all that necessary but maybe you can tell me what's going on here, it makes no sense to me whatsoever*/}
					<Text color={theme.foreground} size="18px">
						{entry.description}
					</Text>
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
