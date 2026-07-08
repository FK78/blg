import express from "express"
import { postCreate, postDelete, postGet, postsGet, postUpdate } from "../controllers/postsController.ts"
import { validate } from "../middleware/validate.ts"

const router = express.Router()

router.post('/', validate(["title", "content"]), postCreate)
router.put('/:id', validate(["title", "content"]), postUpdate)
router.delete('/:id', postDelete)
router.get('/:id', postGet)
router.get('/', postsGet)

export default router