import { pool } from '../config/db.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../middleware/errorHandler.js';

// POST /api/v1/contact
export const submitContactMessage = asyncHandler(async (req, res) => {
  const { name, email, message, company } = req.body;

  // Honeypot: a hidden field real visitors never fill in. Bots that fill
  // every field get a fake success response with no database write.
  if (company) {
    return res.status(201).json({
      success: true,
      data: { received: true },
    });
  }

  const ipAddress = req.ip;
  const userAgent = (req.get('user-agent') || '').slice(0, 500);

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, message, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [name, email, message, ipAddress, userAgent]
    );

    res.status(201).json({
      success: true,
      data: {
        id: result.rows[0].id,
        received: true,
        createdAt: result.rows[0].created_at,
      },
      message: 'Thank you. Your message has been received.',
    });
  } catch (err) {
    // Never leak SQL/database internals to the client.
    throw new ApiError(500, 'We could not save your message right now. Please try again shortly.');
  }
});
