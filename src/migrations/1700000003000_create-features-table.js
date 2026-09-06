export const shorthands = undefined;

export function up(pgm) {
  pgm.createTable('features', {
    id: 'id',
    slug: { type: 'varchar(120)', notNull: true, unique: true },
    title: { type: 'varchar(255)', notNull: true },
    description: { type: 'text' },
    icon: { type: 'varchar(100)' },
    category: { type: 'varchar(100)', notNull: true, default: 'general' },
    display_order: { type: 'integer', notNull: true, default: 0 },
    is_published: { type: 'boolean', notNull: true, default: true },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
    updated_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  pgm.createIndex('features', 'slug');
  pgm.createIndex('features', 'category');
  pgm.createIndex('features', 'display_order');
}

export function down(pgm) {
  pgm.dropTable('features');
}
