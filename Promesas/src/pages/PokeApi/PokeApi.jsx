import { useEffect, useState } from "react";
import { Link } from 'react-router';
import '@/css/PokeApi.css';

import pokemons from '@/assets/pokemons.webp';
import hazte_con_todos from '@/assets/hazte_con_todos.png';

const PokeApi = () => {
    const [data, setData] = useState({
        total: 0,
        nextPage: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        prevPage: null,
        pokemonList: []
    });

    const [searchTerm, setSearchTerm] = useState("");
    let isDisabled = false;

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchPokemonData = async (url = "https://pokeapi.co/api/v2/pokemon") => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData({
                total: result.count,
                nextPage: result.next,
                prevPage: result.previous,
                pokemonList: result.results
            });
            console.log(result);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const goToNextPage = () => {
        if (data.nextPage) {
            fetchPokemonData(data.nextPage);
        } else {
            isDisabled = true;
        }
    };
    
    const goToPrevPage = () => {
        if (data.prevPage) {
            fetchPokemonData(data.prevPage);
        } else {
            isDisabled = true;
        }
    };

    return (
        <section className="Section">
            <img className="Section-img" src={pokemons} alt="pokemon" />
            <img className="Section-img--2" src={hazte_con_todos} alt="pokemon" />
            <div className="Section-div">
                <button className="Section-btn" onClick={goToPrevPage} disabled={isDisabled}>Anterior</button>
                <button className="Section-btn" onClick={goToNextPage} disabled={isDisabled}>Siguiente</button>
            </div>
            <ul className="Section-ul">
                {data.pokemonList.map((poke, i) => (
                    <li key={i}>
                        <Link to={`/pokeApi/${poke.name}`}>
                            <p className="Section-p">{poke.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
                <p className="Section-pokemons">Total de pokémons: {data.total}</p>
        </section>
    );
}

export default PokeApi;
