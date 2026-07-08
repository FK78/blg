<p align="center">
  <img src="./logo.svg" alt="blg logo" width="150" />
</p>

<h1 align="center">blg</h1>

<p align="center">
  <em>A blogging API for people who'd rather write code than Medium posts.</em>
</p>

<p align="center">
  RESTful API for a personal blogging platform. No frontend. No CMS. Just endpoints and vibes.
</p>

---

## Why?

Because every developer needs a blog they'll never actually update. At least this one has proper status codes.

## Tech Stack

- **Node.js** + **Express 5** + **TypeScript** - type safety and modern JS
- **PostgreSQL** - the real deal, running in Docker
- **pg** - raw SQL, no ORM training wheels
- No frontend - that's a different kind of suffering

## Endpoints

| Method | Route | What it does |
|--------|-------|-------------|
| `POST` | `/posts` | Publish your hot take |
| `GET` | `/posts` | See all the things you wrote at 2am |
| `GET` | `/posts/:id` | Find that one post you're weirdly proud of |
| `GET` | `/posts?term=tech` | Search for posts (because scroll is for social media) |
| `PUT` | `/posts/:id` | Fix your embarrassing typo |
| `DELETE` | `/posts/:id` | It never happened |

## Post Schema

```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2026-07-08T12:00:00Z",
  "updatedAt": "2026-07-08T12:00:00Z"
}
```

## Status Codes

| Code | Meaning |
|------|---------|
| `200` | Here's your stuff |
| `201` | Created. You're welcome. |
| `204` | Deleted. Gone. Poof. |
| `400` | You sent garbage. Try again. |
| `404` | Doesn't exist. Never did. (Maybe.) |
| `500` | Something broke. Not your fault. (Probably.) |

## Getting Started

```bash
git clone https://github.com/FK78/blg.git
cd blg
npm install
```

Set up your environment:

```bash
cp .env.example .env
# Fill in your Postgres credentials
```

Start the database:

```bash
docker compose up -d
```

Create the posts table (connect to Postgres and run):

```sql
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT,
    tags TEXT[],
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

Start the server:

```bash
npm run dev
```

## Project Structure

```
blg/
├── src/
│   ├── index.ts              # Server entry point
│   ├── routes/
│   │   └── postsRouter.ts    # Route definitions
│   ├── controllers/
│   │   └── postsController.ts # Request handling
│   ├── queries/
│   │   └── postQueries.ts    # Raw SQL queries
│   ├── middleware/
│   │   └── validate.ts       # Input validation
│   └── db/
│       └── db.ts             # Database connection pool
├── compose.yml               # Docker Compose for Postgres
└── tsconfig.json
```

## Requirements

- Node.js 18+
- Docker (for PostgreSQL)
- Opinions about REST conventions (optional but inevitable)

## Credit

Built as a solution to the [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api) project on roadmap.sh.

## License

MIT - fork it, break it, blog about it.
