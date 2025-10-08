import pg from 'pg';

// Check if environment is production
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
};

export const pool = new pg.Pool(config);