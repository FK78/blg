import express from "express"
import { postCreate } from "../controllers/postsController.ts"
import { validate } from "../middleware/validate.ts"

const router = express.Router()

router.post('/', validate(["title", "content"]), postCreate)

export default router