import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home"
import Opozorilo from "../Opozorilo/Opozorilo";
import SeznamEkip from "../SeznamEkip/SeznamEkip";



export default function Routing(){
    return(
        <Routes>
            {} 
            <Route path="/" element = {<SeznamEkip />} />
            <Route path="/:ime" element = {<Home />} />

        </Routes>
    )
}
