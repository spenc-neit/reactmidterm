import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import "./OneEntry.css"
import { Box } from "./components/Box";
import { Text } from "./components/Text";

const OneEntry = () =>{
    const id = useParams()
    // const id = props.id
    const {data:entry, loading, error} = useFetch("products/" + id)
    console.log(entry, "entry")

    return(
        <>
            {/* <h1 style={{color:"white"}}>The ID is {id}</h1> */}
            <Box>
                <img src={`${entry.image}`} className="prodimg2" />
                <div>
                    <Text color="navy" size="25px" link linkSrc={`${entry.id}`}>
                        {entry.title}
                    </Text>
                    <Text color="dimgray" size="20px">{entry.category} - {entry.rating.rate} stars ({entry.rating.count} ratings)</Text>
                    <Text color="navy" size="18px">{entry.description}</Text>
                    <Text color="navy" size="20px">{entry.price}</Text> <br />
                    <Text color="blue" size="12px" link linkSrc="..">Go back</Text>
                </div>
            </Box>
        </>
    )
}

export default OneEntry