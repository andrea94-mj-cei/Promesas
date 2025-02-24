import { useParams } from "react-router";
import { useEffect, useState } from "react";
import '@/css/DungeonsDragons.css';

const Dragon = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        fetchSingleDragon();
    }, [id]);

    const fetchSingleDragon = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${id}`);
            if (!response.ok) {
                throw new Error('No se encontró la respuesta');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return <p>No se encontraron datos</p>;
    }

    const { name, size, type, alignment, armor_class, hit_points, hit_dice, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, languages, challenge_rating } = data;

    return (
        <article className="dragon-container">
            <h2 className="dragon-title">Monstruo: {name}</h2>
            <div className="dragon-details">
                <p className="dragon-detail"><b>Tamaño: </b>{size}</p>
                <p className="dragon-detail"><b>Tipo: </b>{type}</p>
                <p className="dragon-detail"><b>Alineación: </b>{alignment}</p>
                <p className="dragon-detail"><b>Clase de Armadura: </b>
                    {Array.isArray(armor_class) ? armor_class.map(ac => ac.value).join(", ") : armor_class?.value || "Desconocido"}
                </p>
                <p className="dragon-detail"><b>Puntos de Golpe: </b>{hit_points}</p>
                <p className="dragon-detail"><b>Dados de Golpe: </b>{hit_dice}</p>
                <p className="dragon-detail"><b>Velocidad: </b>
                    {speed ? Object.entries(speed).map(([type, value]) => `${type}: ${value}`).join(", ") : "Desconocida"}
                </p>
                <p className="dragon-detail"><b>Fuerza: </b>{strength}</p>
                <p className="dragon-detail"><b>Destreza: </b>{dexterity}</p>
                <p className="dragon-detail"><b>Constitución: </b>{constitution}</p>
                <p className="dragon-detail"><b>Inteligencia: </b>{intelligence}</p>
                <p className="dragon-detail"><b>Sabiduría: </b>{wisdom}</p>
                <p className="dragon-detail"><b>Carisma: </b>{charisma}</p>
                <p className="dragon-detail"><b>Idiomas: </b>{languages || "Ninguno"}</p>
                <p className="dragon-detail"><b>Desafío: </b>{challenge_rating}</p>
            </div>
        </article>
    );
};

export default Dragon;
