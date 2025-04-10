import React from 'react';
import img_user from '@/assets/img_user.png';


const UserCard = ({ name, username, email, phone, website, address }) => {
    
    const { street, suite, city, zipcode, geo } = address;
    

    return (
        <div className="Usercard-container">
            <img src={img_user} alt="imagen-usuario" className="user-avatar" />
            <h2>{name}</h2>
            <p>{username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Teléfono:</strong> {phone}</p>
            <p><strong>Web:</strong> <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a></p>
            
            {/* Información de dirección */}
            <div className="address">
                <h4>Dirección</h4>
                <p><strong>Calle:</strong> {street}</p>
                <p><strong>Suite:</strong> {suite}</p>
                <p><strong>Ciudad:</strong> {city}</p>
                <p><strong>Código Postal:</strong> {zipcode}</p>
                <p><strong>Coordenadas:</strong> Lat: {geo.lat}, Lng: {geo.lng}</p>
            </div>
        </div>
    );
}

export default UserCard;