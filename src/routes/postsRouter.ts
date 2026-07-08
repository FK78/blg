import express from "express"
import { postCreate, postUpdate } from "../controllers/postsController.ts"
import { validate } from "../middleware/validate.ts"

const router = express.Router()

router.post('/', validate(["title", "content"]), postCreate)
router.put('/:id', validate(["title", "content"]), postUpdate)

export default router