export const shorthands = undefined;

export function up(pgm) {
  pgm.createTable('contact_messages', {
    id: 'id',
    name: { type: 'varchar(150)', notNull: true },
    email: { type: 'varchar(255)', notNull: true },
    message: { type: 'text', notNull: true },
    ip_address: { type: 'varchar(64)' },
    user_agent: { type: 'varchar(500)' },
    // new | read | archived - lets a future admin view manage the inbox
    status: { type: 'varchar(30)', notNull: true, default: 'new' },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  pgm.createIndex('contact_messages', 'created_at');
  pgm.createIndex('contact_messages', 'email');
  pgm.createIndex('contact_messages', 'status');
}

export function down(pgm) {
  pgm.dropTable('contact_messages');
}
