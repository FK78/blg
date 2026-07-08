import express from "express";
import { pool } from "./db/db.ts";
import postsRouter from "./routes/postsRouter.ts";

const app = express();
const port = process.env.PORT ?? "3000";

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
