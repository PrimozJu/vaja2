import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home"



export default function Routing(){
    return(
        <Routes>
            <Route path="/" element = {<Home />} />

        </Routes>
    )
}
