import { useState } from 'react'
import { ReadAll } from './readAll'
import {
	Link,
	Route,
	Routes,
	useNavigate,
	BrowserRouter,
} from "react-router-dom";
import OneEntry from './OneEntry';

function ProdView(){
    return(
        <>
            <ReadAll />
            
        </>
    )
}

export default ProdView
