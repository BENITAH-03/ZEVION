import { pool } from '../config/db.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// GET /api/v1/products
export const listProducts = asyncHandler(async (req, res) => {
  const result = await pool.query(
    `SELECT id, slug, name, tagline, description, category, status, image_path, specs, display_order, created_at, updated_at
     FROM products
     WHERE is_published = true
     ORDER BY display_order ASC, id ASC`
  );

  res.status(200).json({ success: true, data: result.rows });
});

// GET /api/v1/products/:slug
export const getProductBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  const result = await pool.query(
    `SELECT id, slug, name, tagline, description, category, status, image_path, specs, display_order, created_at, updated_at
     FROM products WHERE slug = $1 AND is_published = true`,
    [slug]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({
      success: false,
      error: { message: 'Product not found.' },
    });
  }

  res.status(200).json({ success: true, data: result.rows[0] });
});
