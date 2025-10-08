import express from 'express';
import { getEventsByLocation } from '../controllers/events.js';

const router = express.Router();

// This route will fetch events based on the location's ID
router.get('/location/:location_id', getEventsByLocation);

export default router;