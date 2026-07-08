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

- **Node.js** + **Express** - because it's fast to write and faster to break
- **SQLite** / **PostgreSQL** - TBD (data has to live somewhere)
- No frontend — that's a different kind of suffering

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

## Getting Started

```bash
git clone https://github.com/FK78/blg.git
cd blg
npm install
npm start
```

## Project Structure

```
blg/
├── index.js           # Server entry point
├── routes/
│   └── posts.js       # All the post endpoints
├── controllers/
│   └── posts.js       # Business logic lives here
├── models/
│   └── post.js        # Database interactions
├── middleware/
│   └── validate.js    # Input validation
└── db/
    └── setup.js       # Database connection and schema
```

## Requirements

- Node.js 18+
- A database (SQLite for dev, Postgres if you're feeling fancy)
- Opinions about REST conventions (optional but inevitable)

## Credit

Built as a solution to the [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api) project on roadmap.sh.

## License

MIT - fork it, break it, blog about it.
