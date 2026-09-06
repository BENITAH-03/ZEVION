import { pool } from '../config/db.js';

/**
 * Idempotent seed data sourced from the official ZEVION project PPT.
 * Safe to re-run: every row is inserted with ON CONFLICT ... DO UPDATE
 * keyed on a stable natural key (section_key / slug), so re-seeding
 * refreshes copy without creating duplicates.
 */

const contentRows = [
  {
    section_key: 'home_hero',
    page: 'home',
    title: 'ZEVION',
    subtitle: 'POWER WHEN FUEL FAILS.',
    body: 'When fuel runs out and help is far away, ZEVION is designed to provide temporary electric mobility support to help you reach a safer location or nearby petrol bunk.',
    metadata: { eyebrow: 'EMERGENCY ELECTRIC MOBILITY SUPPORT' },
    display_order: 1,
  },
  {
    section_key: 'problem_intro',
    page: 'problem',
    title: 'THE PROBLEM',
    subtitle: 'Running out of fuel can leave us stranded.',
    body: 'When fuel runs out, the vehicle cannot move.',
    metadata: {
      flow: ['You are travelling', 'Fuel runs out', 'No petrol bunk nearby', 'Vehicle stops'],
    },
    display_order: 1,
  },
  {
    section_key: 'solution_intro',
    page: 'solution',
    title: 'THE SOLUTION',
    subtitle: 'Introducing ZEVION',
    body: 'When petrol runs out, ZEVION provides temporary electric power to help the vehicle move again.',
    metadata: { closing: "DON'T GET STUCK. MOVE TO SAFETY." },
    display_order: 1,
  },
  {
    section_key: 'how_it_works_intro',
    page: 'how-it-works',
    title: 'HOW IT WORKS',
    subtitle: 'Simple Technology. Smart Purpose.',
    body: 'Detailed engineering and prototype testing will be developed in the next stage.',
    metadata: { chain: ['Battery', 'Smart Controller', 'Electric Motor', 'Vehicle Moves'] },
    display_order: 1,
  },
  {
    section_key: 'product_intro',
    page: 'product',
    title: 'THE ZEVION PRODUCT',
    subtitle: 'Prototype Concept',
    body: 'ZEVION is being developed as a portable emergency electric mobility system intended to provide temporary electric movement when a fuel-powered vehicle runs out of fuel.',
    metadata: {},
    display_order: 1,
  },
  {
    section_key: 'how_to_fit_intro',
    page: 'how-to-fit',
    title: 'HOW TO FIT ZEVION',
    subtitle: 'A general concept overview of fitting the ZEVION system',
    body: 'Exact installation depends on the vehicle model and final prototype design.',
    metadata: {},
    display_order: 1,
  },
  {
    section_key: 'charging_intro',
    page: 'charging',
    title: 'CHARGE. READY. GO.',
    subtitle: 'Keep ZEVION ready before an emergency happens',
    body: 'Battery capacity, charging time and final specifications are under development.',
    metadata: {},
    display_order: 1,
  },
  {
    section_key: 'features_intro',
    page: 'features',
    title: 'KEY FEATURES',
    subtitle: 'What ZEVION is designed to deliver',
    body: '',
    metadata: {},
    display_order: 1,
  },
  {
    section_key: 'market_intro',
    page: 'market',
    title: 'MARKET OPPORTUNITY',
    subtitle: 'A Big Problem = A Big Opportunity',
    body: 'A common problem. A new mobility solution.',
    metadata: {
      points: [
        'Millions of fuel-powered vehicles',
        'Petrol shortages happen every day',
        'Growing interest in electric mobility',
        'Need for smarter mobility solutions',
      ],
    },
    display_order: 1,
  },
  {
    section_key: 'about_vision',
    page: 'about',
    title: 'ABOUT ZEVION',
    subtitle: 'Our Vision',
    body: 'To provide reliable emergency mobility when fuel fails.',
    metadata: {
      founders: ['Hemnath R', 'Benitah Joshi M'],
      institution: 'Easwari Engineering College',
      mentor: 'KARTHICK',
    },
    display_order: 1,
  },
  {
    section_key: 'contact_intro',
    page: 'contact',
    title: 'CONTACT ZEVION',
    subtitle: 'POWER WHEN FUEL FAILS.',
    body: 'Have a question, feedback, or want to collaborate? Send us a message.',
    metadata: {
      email: 'zevion.innovation@gmail.com',
      instagram: 'https://www.instagram.com/zevion.innovation/',
      linkedin: 'https://www.linkedin.com/in/zevion-undefined-a25857433',
    },
    display_order: 1,
  },
  {
    section_key: 'site_disclaimer',
    page: 'global',
    title: 'Prototype Notice',
    subtitle: null,
    body: 'ZEVION is currently a prototype concept. Technical specifications, safety validation, vehicle compatibility and road compliance are subject to engineering testing and certification.',
    metadata: {},
    display_order: 99,
  },
];

const productRows = [
  {
    slug: 'zevion-emergency-electric-drive-system',
    name: 'ZEVION Emergency Electric Drive System',
    tagline: 'Portable emergency electric mobility, activated when fuel runs out.',
    description:
      'ZEVION is being developed as a portable emergency electric mobility system intended to provide temporary electric movement when a fuel-powered vehicle runs out of fuel. This is the core prototype concept described in the ZEVION project.',
    category: 'system',
    status: 'prototype_concept',
    image_path: null,
    specs: {
      note: 'CONCEPT SPECIFICATIONS - under development. Final specifications will be confirmed after engineering testing and validation.',
      concepts: [
        'Battery Powered',
        'Emergency Electric Drive',
        'Temporary Vehicle Movement',
        'Smart Control',
        'Rechargeable System',
        'Portable Concept',
        'Removable System Concept',
      ],
    },
    display_order: 1,
  },
  {
    slug: 'battery-pack-concept',
    name: 'Battery Pack (Concept)',
    tagline: 'Rechargeable power source for emergency use.',
    description:
      'A rechargeable battery concept intended to store power for the emergency electric drive. Exact capacity and chemistry are still under development.',
    category: 'component',
    status: 'prototype_concept',
    image_path: null,
    specs: { note: 'UNDER DEVELOPMENT' },
    display_order: 2,
  },
  {
    slug: 'smart-controller-concept',
    name: 'Smart Controller (Concept)',
    tagline: 'Manages power flow between the battery and motor.',
    description:
      'A smart controller concept responsible for regulating electric power from the battery to the motor in a safe and controlled way.',
    category: 'component',
    status: 'prototype_concept',
    image_path: null,
    specs: { note: 'UNDER DEVELOPMENT' },
    display_order: 3,
  },
  {
    slug: 'electric-hub-motor-concept',
    name: 'Electric Hub Motor (Concept)',
    tagline: 'Provides temporary electric movement to the front wheel.',
    description:
      'A front-wheel electric hub motor concept explored for emergency electric mobility. This is a prototype concept only - final mechanical design, battery placement, electrical architecture, braking compatibility, structural safety and vehicle compatibility require engineering validation.',
    category: 'component',
    status: 'prototype_concept',
    image_path: null,
    specs: { note: 'PROTOTYPE CONCEPT - FINAL ENGINEERING DESIGN UNDER DEVELOPMENT' },
    display_order: 4,
  },
  {
    slug: 'handlebar-control-unit-concept',
    name: 'Handlebar Control Unit (Concept)',
    tagline: 'Simple on/off control to activate ZEVION.',
    description:
      'A simple handlebar-mounted control concept intended to let the rider activate ZEVION during an emergency.',
    category: 'component',
    status: 'prototype_concept',
    image_path: null,
    specs: { note: 'UNDER DEVELOPMENT' },
    display_order: 5,
  },
];

const featureRows = [
  {
    slug: 'portable',
    title: 'Portable',
    description: 'Designed to be carried and stored conveniently.',
    icon: 'package',
    category: 'core',
    display_order: 1,
  },
  {
    slug: 'rechargeable',
    title: 'Rechargeable',
    description: 'Can be recharged and prepared for future emergencies.',
    icon: 'battery-charging',
    category: 'core',
    display_order: 2,
  },
  {
    slug: 'emergency-electric-drive',
    title: 'Emergency Electric Drive',
    description: 'Designed to provide temporary electric mobility support.',
    icon: 'zap',
    category: 'core',
    display_order: 3,
  },
  {
    slug: 'smart-control',
    title: 'Smart Control',
    description: 'Controls the electric drive system.',
    icon: 'sliders',
    category: 'core',
    display_order: 4,
  },
  {
    slug: 'temporary-vehicle-movement',
    title: 'Temporary Vehicle Movement',
    description: 'Designed to help the vehicle reach a petrol bunk or safe location.',
    icon: 'map-pin',
    category: 'core',
    display_order: 5,
  },
  {
    slug: 'future-ready-technology',
    title: 'Future-Ready Technology',
    description: 'An innovative emergency mobility concept for future development.',
    icon: 'rocket',
    category: 'core',
    display_order: 6,
  },
];

async function seedContent(client) {
  for (const row of contentRows) {
    await client.query(
      `INSERT INTO content (section_key, page, title, subtitle, body, metadata, display_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (section_key) DO UPDATE SET
         page = EXCLUDED.page,
         title = EXCLUDED.title,
         subtitle = EXCLUDED.subtitle,
         body = EXCLUDED.body,
         metadata = EXCLUDED.metadata,
         display_order = EXCLUDED.display_order,
         updated_at = now()`,
      [
        row.section_key,
        row.page,
        row.title,
        row.subtitle,
        row.body,
        JSON.stringify(row.metadata || {}),
        row.display_order,
      ]
    );
  }
  console.log(`[seed] Upserted ${contentRows.length} content rows.`);
}

async function seedProducts(client) {
  for (const row of productRows) {
    await client.query(
      `INSERT INTO products (slug, name, tagline, description, category, status, image_path, specs, display_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (slug) DO UPDATE SET
         name = EXCLUDED.name,
         tagline = EXCLUDED.tagline,
         description = EXCLUDED.description,
         category = EXCLUDED.category,
         status = EXCLUDED.status,
         image_path = EXCLUDED.image_path,
         specs = EXCLUDED.specs,
         display_order = EXCLUDED.display_order,
         updated_at = now()`,
      [
        row.slug,
        row.name,
        row.tagline,
        row.description,
        row.category,
        row.status,
        row.image_path,
        JSON.stringify(row.specs || {}),
        row.display_order,
      ]
    );
  }
  console.log(`[seed] Upserted ${productRows.length} product rows.`);
}

async function seedFeatures(client) {
  for (const row of featureRows) {
    await client.query(
      `INSERT INTO features (slug, title, description, icon, category, display_order)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (slug) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         icon = EXCLUDED.icon,
         category = EXCLUDED.category,
         display_order = EXCLUDED.display_order,
         updated_at = now()`,
      [row.slug, row.title, row.description, row.icon, row.category, row.display_order]
    );
  }
  console.log(`[seed] Upserted ${featureRows.length} feature rows.`);
}

async function main() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await seedContent(client);
    await seedProducts(client);
    await seedFeatures(client);
    await client.query('COMMIT');
    console.log('[seed] Done.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('[seed] Failed, rolled back:', err.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

main();
