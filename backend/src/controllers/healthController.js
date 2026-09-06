import { checkDatabaseConnection } from '../config/db.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getHealth = asyncHandler(async (req, res) => {
  const databaseConnected = await checkDatabaseConnection();

  res.status(databaseConnected ? 200 : 503).json({
    status: databaseConnected ? 'ok' : 'degraded',
    apiVersion: 'v1',
    timestamp: new Date().toISOString(),
    database: databaseConnected ? 'connected' : 'unavailable',
  });
});
