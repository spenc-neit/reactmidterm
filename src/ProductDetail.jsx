import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import "./OneEntry.css"
import { Box } from "./components/Box";
import { Text } from "./components/Text";

const ProductDetail = () =>{
    const {id} = useParams()
    // const id = props.id
    const {data:entry, loading, error} = useFetch("products/" + id)

    return(
        <>
            <Box detail>
                <img src={`${entry.image}`} className="prodimg2" />
                <div>
                    <Text color="navy" size="25px" link linkSrc={`${entry.id}`}>
                        {entry.title}
                    </Text>
                    {/* <Text color="dimgray" size="20px">{entry.category} - {entry.rating.rate} stars ({entry.rating.count} ratings)</Text> */}
                        {/*I don't know what in the world is going with the line above but ProductDetail doesn't work at ALL until I comment it out and then un-comment it and then suddenly everything is fine. I'm gonna leave it commented out bc it isn't all that necessary but maybe you can tell me what's going on here, it makes no sense to me whatsoever*/ }
                    <Text color="navy" size="18px">{entry.description}</Text>
                    <Text color="navy" size="20px">${entry.price}</Text> <br />
                    <Text color="blue" size="12px" link linkSrc="../products">Go back</Text>
                </div>
            </Box>
        </>
    )
}

export default ProductDetail