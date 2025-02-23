import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchSinglePokemon();
    }, []);

    const fetchSinglePokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const objeto = await response.json();
            setData(objeto);
        } catch (error) {
            console.error(error);
        }
    }

    const {abilities, base_experience,order, forms, moves, species, stats, name, sprites, height, weight, type} = data;
    const {back_default, front_default, back_shiny, front_shiny} = sprites || {};

    return (
        <article className="Article-container">
                <h2 className="Article-h2">Pokémon: {name}</h2>
            <div className="Article-div">
                <img src={back_default} alt={name} />
                <img src={front_default} alt={name} />
                <img src={back_shiny} alt={name} />
                <img src={front_shiny} alt={name} />
            </div>

            <div className="Article-div--p">
                <p className="Article-p"><b>Experiencia: </b>{base_experience}</p>
                <p className="Article-p"><b>Altura: </b>{height}</p>
                <p className="Article-p"><b>Anchura: </b>{weight}</p>
            </div>

            <div className="Article-div">
                <p className="Article-p"><b>Pokédex: </b>{order}</p>
            </div>

            <div className="Article-map">
                <p className="Article-p"><b>Ataques: </b></p>
                <ul>
                    <li>
                        {
                            abilities && abilities.map((ability, i) => (
                                <p key={i} className="Article-p">{ability.ability.name}</p>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className="Article-map">
                <p className="Article-p"><b>Formas: </b></p>
                <ul>
                    <li>
                        {
                            forms && forms.map((form, i) => (
                                <p key={i} className="Article-p">{form.name}</p>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className="Article-map">
            <p className="Article-p"><b>Estadísticas: </b></p>
                <ul>
                    <li>
                        {
                            stats && stats.map((stat, i) => (
                                <p key={i} className="Article-p">{stat.stat.name}: {stat.base_stat}</p>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className="Article-map">
                <p className="Article-p"><b>Especies: </b></p>
                <ul>
                    <li>
                        {
                            species && <p className="Article-p">{species.name}</p>
                        }
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default Pokemon;