import React from "react";
import { Route, Routes, createBrowserRouter,   RouterProvider} from "react-router-dom";
import Home from "../Home/Home"
import SeznamEkip from "../SeznamEkip/SeznamEkip";
import NovaEkipa from "../NovaEkipa/NovaEkipa";


const Routing = () => {
    return (
        <Routes>
            { }
            <Route path="/" element={<SeznamEkip />} />
            <Route path="/:ime" element={<Home />} />
            <Route path="/novaEkipa" element={<NovaEkipa />} />

        </Routes>
    )
}


/* const Routing = createBrowserRouter([

    {
        path: "/", 
        element: <SeznamEkip />, 
        children: [
            { path: "/:ime", element: <Home /> }, 
            { path: "/novaEkipa", element: <NovaEkipa /> }
        ]

    },

]); */


export default Routing;
