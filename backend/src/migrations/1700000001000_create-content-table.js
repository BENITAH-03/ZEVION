export const shorthands = undefined;

/**
 * "content" holds editable text blocks for page sections (hero copy,
 * disclaimers, roadmap steps, etc.) keyed by a stable section_key, so
 * copy can be updated later without a redeploy or schema change.
 */
export function up(pgm) {
  pgm.createTable('content', {
    id: 'id',
    section_key: { type: 'varchar(100)', notNull: true, unique: true },
    page: { type: 'varchar(50)', notNull: true },
    title: { type: 'varchar(255)' },
    subtitle: { type: 'varchar(500)' },
    body: { type: 'text' },
    metadata: { type: 'jsonb', notNull: true, default: pgm.func("'{}'::jsonb") },
    display_order: { type: 'integer', notNull: true, default: 0 },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
    updated_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  pgm.createIndex('content', 'page');
  pgm.createIndex('content', 'display_order');
}

export function down(pgm) {
  pgm.dropTable('content');
}
