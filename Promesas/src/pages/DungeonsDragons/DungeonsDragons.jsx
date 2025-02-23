import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '@/css/DungeonsDragons.css';

import dragon from '@/assets/dungeonsdragons.jpg';

const DungeonsDragons = () => {
    const [data, setData] = useState({
        total: 0,
        itemList: []
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.dnd5eapi.co/api/monsters");
            const result = await response.json();
            setData({
                total: result.count,
                itemList: result.results
            });
            console.log(result);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const goToNextPage = () => {
        if (currentPage * itemsPerPage < data.total) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.itemList.slice(startIndex, endIndex);

    return (
        <section className="dnd-section">
            <img className='dnd-img' src={dragon} alt="dungeonsdragons" />
            <div className="dnd-navigation">
                <button className="dnd-button" onClick={goToPrevPage} disabled={currentPage === 1}>Anterior</button>
                <button className="dnd-button" onClick={goToNextPage} disabled={currentPage * itemsPerPage >= data.total}>Siguiente</button>
            </div>
            <ul className="dnd-list">
                {currentItems.map((item, i) => (
                    <li key={i} className="dnd-list-item">
                        <Link to={`/dungeonsDragons/${item.index}`}>
                            <p className="dnd-item-name">{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="dnd-total">Total de monstruos: {data.total}</p>
        </section>
    );
}

export default DungeonsDragons;