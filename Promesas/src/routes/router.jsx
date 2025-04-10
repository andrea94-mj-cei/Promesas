import { createBrowserRouter } from "react-router";
import Layout from "@/Layout";

import Home from "@/pages/Home";
import PokeApi from "@/pages/PokeApi/PokeApi";
import Pokemon from "@/pages/PokeApi/Pokemon";
import DungeonsDragons from "@/pages/DungeonsDragons/DungeonsDragons";
import Dragon from "@/pages/DungeonsDragons/Dragon";
import RandomUser from "@/pages/RandomUser/RandomUser";
import User from "@/pages/RandomUser/User";





const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,

    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "pokeApi",
            element: <PokeApi/>,
        },
        {
            path: "pokeApi/:id",
            element: <Pokemon/>,
        },
        {
            path: "dungeonsDragons",
            element: <DungeonsDragons/>,
        },
        {
            path: "dungeonsDragons/:id",
            element: <Dragon/>,
        },
        {
            path: "randomUser",
            element: <RandomUser/>,
        },
        {
            path: "randomUser/:id",
            element: <User/>,
        }


    ]
}])

export default router;