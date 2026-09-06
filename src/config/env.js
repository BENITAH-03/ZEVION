import dotenv from 'dotenv';

dotenv.config();

function requireEnv(name, fallback) {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  databaseUrl: requireEnv('DATABASE_URL'),
  databaseSsl: process.env.DATABASE_SSL === 'true',
  corsOrigin: (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  contactRateLimitMax: parseInt(process.env.CONTACT_RATE_LIMIT_MAX || '5', 10),
  contactRateLimitWindowMinutes: parseInt(
    process.env.CONTACT_RATE_LIMIT_WINDOW_MINUTES || '15',
    10
  ),
  isProduction: (process.env.NODE_ENV || 'development') === 'production',
};
