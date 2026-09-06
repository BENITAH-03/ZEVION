import { pool } from '../config/db.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// GET /api/v1/features
export const listFeatures = asyncHandler(async (req, res) => {
  const { category } = req.query;

  const params = [];
  let query = `SELECT id, slug, title, description, icon, category, display_order, created_at, updated_at
               FROM features WHERE is_published = true`;

  if (category) {
    params.push(category);
    query += ` AND category = $${params.length}`;
  }

  query += ` ORDER BY display_order ASC, id ASC`;

  const result = await pool.query(query, params);

  res.status(200).json({ success: true, data: result.rows });
});
