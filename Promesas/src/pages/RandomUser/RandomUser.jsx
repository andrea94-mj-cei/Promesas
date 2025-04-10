import { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import '@/css/RandomUser.css';

const RandomUser = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const obtenerUsuarios = async () => {
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!respuesta.ok) throw new Error('No se pudieron cargar los usuarios');
            const datos = await respuesta.json();
            setUsuarios(datos); 
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }

    if (cargando) {
        return <p>Cargando usuarios...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="usuarios-container">
            <ul>
                {usuarios.length === 0 ? (
                    <p>No hay usuarios disponibles</p>
                ) : (
                    usuarios.map(usuario => (
                        <li key={usuario.id}>
                            <UserCard {...usuario} />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default RandomUser;