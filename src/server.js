import { createApp } from './app.js';
import { env } from './config/env.js';
import { verifyDatabaseOnStartup, pool } from './config/db.js';

async function start() {
  await verifyDatabaseOnStartup();

  const app = createApp();

  const server = app.listen(env.port, () => {
    console.log(`[server] ZEVION API listening on port ${env.port} (${env.nodeEnv})`);
  });

  const shutdown = async (signal) => {
    console.log(`[server] Received ${signal}. Shutting down gracefully...`);
    server.close(async () => {
      await pool.end();
      process.exit(0);
    });
    // Force-exit if graceful shutdown hangs.
    setTimeout(() => process.exit(1), 10000).unref();
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

start().catch((err) => {
  console.error('[server] Fatal startup error:', err.message);
  process.exit(1);
});
