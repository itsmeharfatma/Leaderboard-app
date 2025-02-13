## Leaderboard App

A Next.js application that implements a searchable and filterable leaderboard using Supabase as the backend database. The app allows users to search for candidates by name and filter by attempt ranges.

## Features

- Search: Search for users by name.

- Filter: Filter users by the number of attempts (e.g., min and max attempts).

- Dynamic Updates: Fetch and display data dynamically without a full page reload.

- Deployment: Deployed on Vercel with automatic CI/CD via GitHub Actions.

## Technologies Used

- Frontend: Next.js (App Router), Tailwind CSS

- Backend: Supabase (Database and API)

- Deployment: Vercel, GitHub Actions

## Prerequisites

- Node.js (v18 or higher)

- npm (v9 or higher)

- Supabase account (for database setup)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/itsmeharfatma/Leaderboard-app.git

cd Leaderboard-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a .env.local file in the root of your project and add the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Run the development server:

```bash
npm run dev
```
