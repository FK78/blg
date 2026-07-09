import express from "express";
import { pool } from "./db/db.ts";
import postsRouter from "./routes/postsRouter.ts";
import { rateLimit } from "./middleware/rate-limiter.ts";

const app = express();
const port = process.env.BLG_PORT ?? "3000";
const limit = 60 * 60 * 1000;
const maxTries = 30;

app.use(rateLimit(limit, maxTries));
app.use(express.json());

try {
  await pool.query("SELECT 1");
  console.log("DB Connected");
} catch (err) {
  console.error(err);
  process.exit(1);
}

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
