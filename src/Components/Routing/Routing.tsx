import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home"
import SeznamEkip from "../SeznamEkip/SeznamEkip";
import NovaEkipa from "../NovaEkipa/NovaEkipa";


export default function Routing(){
    return(
        <Routes>
            {} 
            <Route path="/" element = {<SeznamEkip />} />
            <Route path="/:ime" element = {<Home />} />
            <Route path="/novaEkipa" element = {<NovaEkipa />} />

        </Routes>
    )
}
