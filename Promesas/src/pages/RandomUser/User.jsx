import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const User = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchUser = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${id}`, { signal });
                const data = await response.json();
                setUser(data);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error(error);
                }
            }
        };

        fetchUser();

        return () => {
            controller.abort(); 
        };
    }, [id]);

    const { name, email, phone, website } = user;

    return (
        <div>
            <h1>Usuario</h1>
            <p>Nombre: {name}</p>
            <p>Teléfono: {phone}</p>
            <p>Email: {email}</p>
            <p>Web: {website}</p>
        </div>
    );
};

export default User;