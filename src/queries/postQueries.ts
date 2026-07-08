import { pool } from "../db/db.ts";

type Post = {
  title: string;
  content: string;
  category: string;
  tags: string[];
};

export const createPost = ({ title, content, category, tags }: Post) => {
  return pool.query(
    "INSERT INTO posts(title, content, category, tags) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, content, category, tags],
  );
};

export const updatePost = (
  id: string,
  { title, content, category, tags }: Post,
) => {
  return pool.query(
    "UPDATE posts SET title = $1, content = $2, category = $3, tags = $4, updated_at = NOW() WHERE id = $5 RETURNING *",
    [title, content, category, tags, id],
  );
};

export const deletePost = (id: string) => {
  return pool.query("DELETE FROM posts WHERE id = $1", [id]);
};

export const getPost = (id: string) => {
  return pool.query("SELECT * FROM posts WHERE id = $1", [id]);
};

export const getPosts = () => {
  return pool.query("SELECT * FROM posts");
};

export const getPostsByQuery = (query: string) => {
  return pool.query("SELECT * FROM posts WHERE title ILIKE $1 OR content ILIKE $1 or category ILIKE $1", [query]);
};
