import React from "react";
import { Route, Routes, createBrowserRouter,   RouterProvider} from "react-router-dom";
import Home from "../Home/Home"
import SeznamEkip from "../SeznamEkip/SeznamEkip";
import NovaEkipa from "../NovaEkipa/NovaEkipa";
import Ekipa from "../BackendBaje/Ekipa";
interface Props {
    ekipe: Ekipa[];
    setEkipe: React.Dispatch<React.SetStateAction<Ekipa[]>>;
}

const Routing = (props: Props) => {
    return (
        <Routes>
            { }
            <Route path="/" element={<SeznamEkip ekipe={props.ekipe} setEkipe={props.setEkipe}/>} />
            <Route path="/:ime" element={<Home />} />
            <Route path="/novaEkipa" element={<NovaEkipa ekipe={props.ekipe} setEkipe={props.setEkipe} />} />
        </Routes>
    )
}
export default Routing;
