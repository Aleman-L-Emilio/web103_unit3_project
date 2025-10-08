import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventsByLocationId } from '../services/api';
import '../css/LocationDetail.css';

const LocationDetail = () => {
    const [events, setEvents] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await fetchEventsByLocationId(id);
                setEvents(data);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        };
        getEvents();
    }, [id]); // Re-run effect if the id changes

    return (
        <div className="location-detail-container">
            <h2>Upcoming Events</h2>
            <div className="events-list">
                {events.length > 0 ? (
                    events.map((event) => {
                        const eventDate = new Date(event.date);
                        const isPast = eventDate < new Date();
                        return (
                            <div key={event.id} className={`event-item ${isPast ? 'past-event' : ''}`}>
                                <h3>{event.name} {isPast && <span>(Past Event)</span>}</h3>
                                <p>{event.description}</p>
                                <p><strong>When:</strong> {eventDate.toLocaleString()}</p>
                            </div>
                        );
                    })
                ) : (
                    <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                )}
            </div>
        </div>
    );
};

export default LocationDetail;