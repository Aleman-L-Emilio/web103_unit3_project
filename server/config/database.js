import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

// Explicitly configure dotenv to use the .env file in the /server directory
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename)); // Go up one level from /config
dotenv.config({ path: path.join(__dirname, '.env') });

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: { 
      rejectUnauthorized: false 
    }
};

export const pool = new pg.Pool(config);