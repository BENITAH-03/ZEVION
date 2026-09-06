import { pool } from '../config/db.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// GET /api/v1/content?page=home
export const listContent = asyncHandler(async (req, res) => {
  const { page } = req.query;

  const params = [];
  let query = `SELECT id, section_key, page, title, subtitle, body, metadata, display_order, created_at, updated_at
               FROM content`;

  if (page) {
    params.push(page);
    query += ` WHERE page = $1`;
  }

  query += ` ORDER BY display_order ASC, id ASC`;

  const result = await pool.query(query, params);

  res.status(200).json({
    success: true,
    data: result.rows,
  });
});

// GET /api/v1/content/:sectionKey
export const getContentBySectionKey = asyncHandler(async (req, res) => {
  const { sectionKey } = req.params;

  const result = await pool.query(
    `SELECT id, section_key, page, title, subtitle, body, metadata, display_order, created_at, updated_at
     FROM content WHERE section_key = $1`,
    [sectionKey]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({
      success: false,
      error: { message: 'Content section not found.' },
    });
  }

  res.status(200).json({ success: true, data: result.rows[0] });
});
