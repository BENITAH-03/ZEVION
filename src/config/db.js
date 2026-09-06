import pg from 'pg';
import { env } from './env.js';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: env.databaseSsl ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
  // Unexpected error on an idle client - log and let the pool recover.
  console.error('[db] Unexpected error on idle PostgreSQL client:', err.message);
});

export async function checkDatabaseConnection() {
  try {
    const result = await pool.query('SELECT 1 AS ok');
    return result.rows[0]?.ok === 1;
  } catch (err) {
    console.error('[db] Health check query failed:', err.message);
    return false;
  }
}

export async function verifyDatabaseOnStartup() {
  try {
    await pool.query('SELECT 1');
    console.log('[db] PostgreSQL connection verified.');
    return true;
  } catch (err) {
    console.error(
      '[db] Could not connect to PostgreSQL on startup. The server will keep running, but data endpoints will fail until the database is reachable.'
    );
    console.error('[db] Reason:', err.message);
    return false;
  }
}
