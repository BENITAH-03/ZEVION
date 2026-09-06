import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';

import { env } from './config/env.js';
import { generalApiLimiter } from './middleware/rateLimiters.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import v1Router from './routes/v1/index.js';

export function createApp() {
  const app = express();

  // Render/Vercel-style deployments sit behind a reverse proxy; trust it so
  // rate limiting and logging see the real client IP.
  app.set('trust proxy', 1);

  app.use(
    helmet({
      contentSecurityPolicy: false, // Frontend is a separate static app; API needs no CSP.
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
  );

  app.use(
    cors({
      origin(origin, callback) {
        // Allow non-browser tools (no Origin header) and any configured origin.
        if (!origin || env.corsOrigin.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
      },
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type'],
    })
  );

  app.use(compression());
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  app.use(morgan(env.isProduction ? 'combined' : 'dev'));

  app.use('/api/v1', generalApiLimiter, v1Router);

  app.get('/', (req, res) => {
    res.json({
      name: 'ZEVION API',
      status: 'running',
      apiVersion: 'v1',
      docs: '/api/v1/health',
    });
  });

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
