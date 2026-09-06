# ZEVION - Emergency Electric Mobility Support

**POWER WHEN FUEL FAILS.**

ZEVION is an idea and prototype-stage project for an emergency electric mobility system. When a
fuel-powered vehicle runs out of petrol and there is no petrol bunk nearby, ZEVION is designed to
give temporary electric power so the rider can move the vehicle to a nearby petrol bunk or a safer
location.

> **Prototype notice:** ZEVION is currently a prototype concept. Technical specifications, safety
> validation, vehicle compatibility and road compliance are subject to engineering testing and
> certification. ZEVION is **not** commercially available, road certified, government approved, or
> safety certified.

This repository contains the **complete full-stack website** for ZEVION: a React frontend, a
Node.js/Express backend API, and a PostgreSQL database. This README explains everything in simple,
step-by-step language so you can run, edit and deploy the project even if you are a student and new
to full-stack development.

---

## Table of Contents

1. [What This Project Is](#1-what-this-project-is)
2. [Key Features](#2-key-features)
3. [Technology Stack](#3-technology-stack)
4. [Folder Structure](#4-folder-structure)
5. [Requirements](#5-requirements)
6. [Frontend Installation](#6-frontend-installation)
7. [Backend Installation](#7-backend-installation)
8. [PostgreSQL Setup](#8-postgresql-setup)
9. [Environment Variables](#9-environment-variables)
10. [Database Migrations](#10-database-migrations)
11. [Database Seed Data](#11-database-seed-data)
12. [Running the Frontend](#12-running-the-frontend)
13. [Running the Backend](#13-running-the-backend)
14. [Production Build](#14-production-build)
15. [Uploading to GitHub](#15-uploading-to-github)
16. [Deploying the Frontend to Vercel](#16-deploying-the-frontend-to-vercel)
17. [Deploying the Backend to Render](#17-deploying-the-backend-to-render)
18. [Production PostgreSQL Database](#18-production-postgresql-database)
19. [Production Environment Variables](#19-production-environment-variables)
20. [Connecting Frontend to Backend](#20-connecting-frontend-to-backend)
21. [Troubleshooting](#21-troubleshooting)
22. [Future Development](#22-future-development)

---

## 1. What This Project Is

ZEVION solves a simple, common problem:

```
TRAVELLING -> FUEL RUNS OUT -> NO PETROL BUNK NEARBY -> VEHICLE STOPS -> RIDER STRANDED
```

ZEVION's proposed solution:

```
FUEL EMPTY -> ACTIVATE ZEVION -> BATTERY PROVIDES POWER -> ELECTRIC MOTOR -> REACH PETROL BUNK / SAFE LOCATION
```

This website explains the problem, the ZEVION concept, how it works, the product concept, how it
might be fitted to a vehicle, charging, key features, market opportunity, business model, roadmap,
impact, the team, and a working contact form - all sourced from the official ZEVION project
material, without inventing certifications, statistics, or specifications that do not exist yet.

## 2. Key Features

- 11 fully-working pages built with React Router (Home, Problem, Solution, How It Works, Product,
  How to Fit, Charging, Features, Market, About, Contact) plus a custom 404 page.
- Official ZEVION logo used consistently across navbar, hero, footer, favicon and the About/Contact
  pages.
- Black + metallic gold + white "premium automotive" visual identity, matching the ZEVION brand.
- A real Node.js/Express REST API (versioned `/api/v1`) backed by PostgreSQL.
- A working, validated, spam-protected contact form that saves messages to PostgreSQL.
- Database-driven `content`, `products` and `features` sections, so copy can be updated later
  without a redeploy.
- Rate limiting, Helmet security headers, CORS allow-listing, centralized error handling, and
  input validation on both frontend and backend.
- Fully responsive layout (desktop, tablet, mobile) with an accessible mobile navigation menu.
- SEO basics: page titles, meta descriptions, Open Graph tags, and a ZEVION favicon.
- Ready to deploy: frontend to Vercel, backend to Render, database on managed PostgreSQL.

## 3. Technology Stack

**Frontend**
- React 18 + Vite
- React Router v6
- Tailwind CSS
- Axios
- lucide-react (icons)

**Backend**
- Node.js + Express
- PostgreSQL (via the `pg` driver)
- `node-pg-migrate` for database migrations
- `express-validator` for input validation
- `helmet`, `cors`, `express-rate-limit`, `morgan`, `compression` for security and reliability

**Database**
- PostgreSQL 14+

## 4. Folder Structure

```
ZEVION/
├── frontend/                  React + Vite application
│   ├── src/
│   │   ├── assets/images/     ZEVION logo files
│   │   ├── components/        Reusable UI components (cards, diagrams, states)
│   │   ├── hooks/              useApi, useScrollReveal
│   │   ├── layouts/            Navbar, Footer, Layout, page transitions
│   │   ├── pages/               One file per website page
│   │   ├── services/            Axios API client
│   │   ├── App.jsx               Route definitions
│   │   └── main.jsx               React entry point
│   ├── public/                    Favicon
│   ├── index.html
│   ├── .env.example
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                     Node.js + Express API
│   ├── src/
│   │   ├── config/               Environment loading, PostgreSQL pool
│   │   ├── controllers/          Route handler logic
│   │   ├── middleware/           Error handling, rate limiting, validation
│   │   ├── migrations/           node-pg-migrate migration files
│   │   ├── routes/v1/            REST API routes (versioned)
│   │   ├── seeds/                Seed script (content, products, features)
│   │   ├── validators/           express-validator rule sets
│   │   ├── app.js                 Express app setup
│   │   └── server.js               Server startup + graceful shutdown
│   ├── .env.example
│   └── package.json
│
├── README.md                      This file
└── .gitignore
```

## 5. Requirements

Install these on your computer before starting:

- **Node.js** version 18 or newer ([nodejs.org](https://nodejs.org)) - includes `npm`.
- **PostgreSQL** version 14 or newer ([postgresql.org](https://www.postgresql.org/download/)).
- **Git** ([git-scm.com](https://git-scm.com)).
- A code editor such as VS Code.

Check your versions:

```bash
node -v
npm -v
psql --version
```

## 6. Frontend Installation

```bash
cd frontend
npm install
```

This downloads React, Vite, Tailwind CSS and all other frontend packages into
`frontend/node_modules`.

## 7. Backend Installation

```bash
cd backend
npm install
```

This downloads Express, the PostgreSQL driver, and all other backend packages into
`backend/node_modules`.

## 8. PostgreSQL Setup

1. Make sure PostgreSQL is installed and running on your computer.
2. Open a terminal and connect as the PostgreSQL superuser (on Linux/Mac this is usually
   `postgres`):

   ```bash
   sudo -u postgres psql
   ```

3. Create a database user and a database for ZEVION (replace the password with your own):

   ```sql
   CREATE USER zevion WITH PASSWORD 'choose_a_password' CREATEDB;
   CREATE DATABASE zevion_dev OWNER zevion;
   \q
   ```

4. Your local PostgreSQL connection string will look like this:

   ```
   postgresql://zevion:choose_a_password@localhost:5432/zevion_dev
   ```

   You will put this into `backend/.env` in the next step.

## 9. Environment Variables

Environment variables keep secrets (like database passwords) out of the source code.

### Backend

```bash
cd backend
cp .env.example .env
```

Open `backend/.env` and fill in your real values:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://zevion:choose_a_password@localhost:5432/zevion_dev
DATABASE_SSL=false
CORS_ORIGIN=http://localhost:5173
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW_MINUTES=15
```

### Frontend

```bash
cd frontend
cp .env.example .env
```

Open `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

**Never commit your real `.env` files to GitHub.** They are already listed in `.gitignore`.

## 10. Database Migrations

Migrations create the database tables (`content`, `products`, `features`, `contact_messages`) in a
repeatable, version-controlled way. You never need to create tables by hand in PostgreSQL.

Run migrations (development or production - same command, pointed at whichever `DATABASE_URL` is
in your environment):

```bash
cd backend
npm run migrate:up
```

To undo the most recent migration:

```bash
npm run migrate:down
```

To create a new migration file in the future (for new features):

```bash
npm run migrate:create add-some-new-table
```

## 11. Database Seed Data

Seeding fills the database with the official ZEVION content (hero text, product concepts, and
feature cards) so the website has real data to display.

```bash
cd backend
npm run seed
```

This is safe to run more than once - it updates existing rows instead of duplicating them.

## 12. Running the Frontend

```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 13. Running the Backend

In a separate terminal:

```bash
cd backend
npm run dev
```

The API will be available at [http://localhost:5000/api/v1](http://localhost:5000/api/v1). Check
it is healthy:

```bash
curl http://localhost:5000/api/v1/health
```

You should see:

```json
{ "status": "ok", "apiVersion": "v1", "database": "connected" }
```

**Run both the frontend and backend at the same time** (in two terminals) for the website to fully
work, including the contact form.

## 14. Production Build

To build the frontend for deployment:

```bash
cd frontend
npm run build
```

This creates a `frontend/dist` folder with static, optimized files ready to deploy. Preview the
production build locally:

```bash
npm run preview
```

The backend does not need a separate "build" step - it runs directly with `npm start` (see
[Deploying the Backend to Render](#17-deploying-the-backend-to-render)).

## 15. Uploading to GitHub

1. Create a new, empty repository on GitHub (do not initialize it with a README).
2. From the project's root folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: ZEVION full-stack website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

Because of `.gitignore`, your `node_modules` folders and `.env` files will **not** be uploaded -
this is correct and expected.

## 16. Deploying the Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **New Project** and import your ZEVION repository.
3. When asked for the **Root Directory**, choose `frontend`.
4. Framework preset: Vercel will auto-detect **Vite**.
5. Under **Environment Variables**, add:

   | Name | Value |
   |---|---|
   | `VITE_API_URL` | `https://your-backend.onrender.com/api/v1` |

   (You will get the real Render backend URL after completing the next section - come back and
   update this value once your backend is deployed.)
6. Click **Deploy**.
7. Vercel automatically handles React Router page refreshes for a Vite SPA, so all routes
   (`/product`, `/contact`, etc.) will work correctly when visited or refreshed directly.

## 17. Deploying the Backend to Render

1. Go to [render.com](https://render.com) and sign in with GitHub.
2. Click **New +** -> **Web Service** and select your ZEVION repository.
3. Set the **Root Directory** to `backend`.
4. **Build Command:** `npm install`
5. **Start Command:** `npm start`
6. Under **Environment Variables**, add:

   | Name | Value |
   |---|---|
   | `PORT` | `5000` (Render sets its own `PORT` automatically, but the app respects it) |
   | `NODE_ENV` | `production` |
   | `DATABASE_URL` | Your Render PostgreSQL connection string (see next section) |
   | `DATABASE_SSL` | `true` |
   | `CORS_ORIGIN` | `https://your-frontend.vercel.app` |
   | `CONTACT_RATE_LIMIT_MAX` | `5` |
   | `CONTACT_RATE_LIMIT_WINDOW_MINUTES` | `15` |

7. Deploy. Once live, run migrations and seed data **once** against the production database using
   Render's Shell tab (or run them locally with `DATABASE_URL` temporarily pointed at the
   production database):

   ```bash
   npm run migrate:up
   npm run seed
   ```

8. Confirm the health check works:

   ```
   https://your-backend.onrender.com/api/v1/health
   ```

## 18. Production PostgreSQL Database

1. In Render, click **New +** -> **PostgreSQL**.
2. Choose a name, region, and plan, then create the database.
3. Copy the **Internal Database URL** (if your web service is also on Render) or the **External
   Database URL** (if connecting from elsewhere) - this is your production `DATABASE_URL`.
4. Paste it into your backend service's environment variables on Render (see previous section).
5. Managed PostgreSQL providers like Render usually require SSL - keep `DATABASE_SSL=true` in
   production.

## 19. Production Environment Variables

Never hard-code URLs in the source code. Always use environment variables:

- Frontend: `VITE_API_URL` must point at your deployed backend's `/api/v1` URL.
- Backend: `CORS_ORIGIN` must list your deployed frontend's exact URL (no trailing slash), and
  `DATABASE_URL` must point at your production PostgreSQL database.

## 20. Connecting Frontend to Backend

After both are deployed:

1. Update the frontend's `VITE_API_URL` environment variable on Vercel to point at your live
   Render backend, then redeploy the frontend (Vercel redeploys automatically when you change an
   environment variable and trigger a new deployment).
2. Update the backend's `CORS_ORIGIN` environment variable on Render to match your live Vercel
   frontend URL exactly, then redeploy the backend.
3. Open your live frontend URL, submit the contact form, and confirm you see the success message.
4. Confirm the message was saved by checking your production database, or by re-fetching
   `/api/v1/health` to confirm the database connection is healthy.

Do not consider deployment finished until this real, three-way check - **frontend -> backend ->
PostgreSQL** - has been verified on the actual deployed URLs.

## 21. Troubleshooting

**"Cannot connect to database" / backend crashes on startup**
- Check that PostgreSQL is running (`pg_isready` or `service postgresql status`).
- Check `DATABASE_URL` in `backend/.env` is correct (user, password, host, port, database name).

**Contact form shows "Something went wrong"**
- Make sure the backend is running and reachable at the URL in `VITE_API_URL`.
- Open your browser's developer console (Network tab) and check for CORS errors - if you see one,
  make sure `CORS_ORIGIN` in `backend/.env` exactly matches the URL the frontend is served from.

**CORS error in the browser console**
- `CORS_ORIGIN` in the backend environment must exactly match the frontend's origin, including
  protocol (`http`/`https`) and port. Multiple origins can be comma-separated.

**Blank page after deploying to Vercel**
- Confirm the Vercel project's **Root Directory** is set to `frontend`.
- Confirm `VITE_API_URL` is set correctly and redeploy after changing it (Vite bakes environment
  variables in at build time).

**404 when refreshing a page like `/product` on a static host**
- Vercel's Vite framework preset handles this automatically. If you use a different static host,
  configure it to rewrite all paths to `index.html`.

**Migrations fail with "relation already exists"**
- This usually means migrations already ran. Check the `pgmigrations` table in your database to
  see which migrations have already been applied.

**Port already in use**
- Another process is using port 5000 or 5173. Stop it, or change `PORT` (backend) /
  `--port` (frontend, e.g. `npm run dev -- --port 5174`).

## 22. Future Development

ZEVION is designed to grow. The current architecture supports adding, without rebuilding the whole
application:

- Additional product versions and detailed specifications once finalized.
- Engineering test results and certification information.
- Partnership and enquiry management modules.
- Service and maintenance request tracking.
- Product documentation and a news/updates section.
- Investor information and additional ZEVION products.

The backend uses versioned APIs (`/api/v1`, with room for a future `/api/v2`), modular routes and
controllers, and database migrations - so new features can be added safely without breaking
existing functionality.

---

## Project Status

ZEVION is currently at the **idea and prototype development stage**.

```
IDEA -> PROTOTYPE -> ENGINEERING DEVELOPMENT -> TESTING -> VALIDATION -> SAFETY & COMPLIANCE -> PRODUCT DEVELOPMENT -> FUTURE COMMERCIAL DEPLOYMENT
```

## Team

- **Founders:** Hemnath R, Benitah Joshi M
- **Faculty Mentor:** Karthick
- **Institution:** Easwari Engineering College

## Contact

- **Email:** [zevion.innovation@gmail.com](mailto:zevion.innovation@gmail.com)
- **Instagram:** [@zevion.innovation](https://www.instagram.com/zevion.innovation/)
- **LinkedIn:** [ZEVION](https://www.linkedin.com/in/zevion-undefined-a25857433)

&copy; ZEVION. All rights reserved.
