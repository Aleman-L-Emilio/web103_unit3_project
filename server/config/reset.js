import { pool } from './database.js';
import 'dotenv/config';

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      image_url VARCHAR(255)
    );
  `;
  try {
    await pool.query(createTableQuery);
    console.log('🎉 locations table created successfully');
  } catch (err) {
    console.error('❌ Error creating locations table', err);
  }
};

const createEventsTable = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        date TIMESTAMP NOT NULL,
        location_id INTEGER REFERENCES locations(id)
      );
    `;
    try {
      await pool.query(createTableQuery);
      console.log('🎉 events table created successfully');
    } catch (err) {
      console.error('❌ Error creating events table', err);
    }
};

const seedData = async () => {
    try {
        // Seed Locations with NEW image URLs
        await pool.query(`
        INSERT INTO locations (name, description, image_url) VALUES
        ('Cosmic Cantina', 'A retro-futuristic diner known for its alien clientele and synth-wave music nights.', '/assets/cosmic_cantina.jpeg'),
        ('The Forbidden Library', 'An ancient repository of forgotten lore and powerful artifacts. Enter at your own risk.', '/assets/forbidden_library.jpeg'),
        ('Dragon''s Peak', 'The highest mountain in the realm, home to ancient dragons and breathtaking views.', '/assets/dragons_peak.jpeg'),
        ('Neon Alley', 'A bustling cyberpunk market street, famous for its tech vendors and noodle stalls.', '/assets/neon_alley.jpeg');
        `);

        // Seed Events
        await pool.query(`
        INSERT INTO events (name, description, date, location_id) VALUES
        ('Synth-Wave Saturday', 'Live music from the galaxy''s best synth artists.', '2025-11-15 20:00:00', 1),
        ('Galactic Trivia Night', 'Test your knowledge of the cosmos and win prizes!', '2025-11-22 19:00:00', 1),
        ('Reading of the Ancient Scrolls', 'A rare public reading of a recently unearthed magical text.', '2025-12-05 18:00:00', 2),
        ('The Dragon Hatching Ceremony', 'Witness the birth of a new generation of majestic dragons.', '2026-01-10 10:00:00', 3),
        ('Drone Racing Grand Prix', 'High-speed drone races through the neon-lit alleyways.', '2025-10-25 21:00:00', 4),
        ('Past Event: The Noodle Cook-Off', 'The annual competition to crown the best noodle chef in the city.', '2024-09-20 12:00:00', 4);
        `);
        console.log('🌱 Database seeded successfully');
    } catch (err) {
        console.error('❌ Error seeding data', err);
    }
};


const setupDatabase = async () => {
    await createLocationsTable();
    await createEventsTable();
    await seedData();
    pool.end();
};

setupDatabase();