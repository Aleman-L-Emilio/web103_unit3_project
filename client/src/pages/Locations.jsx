import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchLocations } from '../services/api';
import '../css/Locations.css';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = async () => {
            try {
                const data = await fetchLocations();
                setLocations(data);
            } catch (error) {
                console.error("Failed to fetch locations:", error);
            }
        };
        getLocations();
    }, []);

    return (
        <div className="locations-container">
            <h2>Explore Our Venues</h2>
            <div className="locations-grid">
                {locations.map((location) => (
                    <Link to={`/locations/${location.id}`} key={location.id} className="location-card">
                        <img src={location.image_url} alt={location.name} />
                        <div className="location-info">
                            <h3>{location.name}</h3>
                            <p>{location.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Locations;