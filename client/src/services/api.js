const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const fetchLocations = async () => {
    const response = await fetch(`${API_URL}/api/locations`);
    if (!response.ok) {
        throw new Error('Failed to fetch locations');
    }
    return response.json();
};

export const fetchEventsByLocationId = async (locationId) => {
    const response = await fetch(`${API_URL}/api/events/location/${locationId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch events for the location');
    }
    return response.json();
};