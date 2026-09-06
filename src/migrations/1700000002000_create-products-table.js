export const shorthands = undefined;

export function up(pgm) {
  pgm.createTable('products', {
    id: 'id',
    slug: { type: 'varchar(120)', notNull: true, unique: true },
    name: { type: 'varchar(255)', notNull: true },
    tagline: { type: 'varchar(500)' },
    description: { type: 'text' },
    category: { type: 'varchar(100)' },
    // idea | prototype | in_development | future_planned
    status: { type: 'varchar(50)', notNull: true, default: 'prototype' },
    image_path: { type: 'varchar(500)' },
    specs: { type: 'jsonb', notNull: true, default: pgm.func("'{}'::jsonb") },
    display_order: { type: 'integer', notNull: true, default: 0 },
    is_published: { type: 'boolean', notNull: true, default: true },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
    updated_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  pgm.createIndex('products', 'slug');
  pgm.createIndex('products', 'is_published');
  pgm.createIndex('products', 'display_order');
}

export function down(pgm) {
  pgm.dropTable('products');
}
